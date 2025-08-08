import { SignJWT, jwtVerify } from 'jose';
import { HttpResponse } from 'msw';

type Session = {
    id: number;
    login: string;
    name: string;
    //sub: number;
};

const JWT_SECRET = new TextEncoder().encode('your-secret-key');
const ACCESS_TOKEN_EXPIRY = '1m';
const REFRESH_TOKEN_EXPIRY = '7d';

export function createRefreshTokenCookie(refreshToken: string) {
    return `refresh=${refreshToken}; HttpOnly; Max-Age=604800`;
}

export function deleteRefreshTokenCookie(): string {
    return 'refresh=; Path=/; HttpOnly; Secure; SameSite=Strict; Max-Age=0';
}

export async function generateTokens(session: Session) {
    const accessToken = await new SignJWT(session)
        .setProtectedHeader({ alg: 'HS256' })
        .setIssuedAt()
        .setExpirationTime(ACCESS_TOKEN_EXPIRY)
        .sign(JWT_SECRET);

    const refreshToken = await new SignJWT(session)
        .setProtectedHeader({ alg: 'HS256' })
        .setIssuedAt()
        .setExpirationTime(REFRESH_TOKEN_EXPIRY)
        .sign(JWT_SECRET);

    return { accessToken, refreshToken };
}

export async function verifyToken(token: string): Promise<Session> {
    const { payload } = await jwtVerify(token, JWT_SECRET);
    return payload as Session;
}

export async function verifyTokenOrThrow(request: Request): Promise<Session> {
    const token = request.headers.get('Authorization')?.split(' ')[1];
    const session = token ? await verifyToken(token).catch(() => null) : null;
    if (!session) {
        throw HttpResponse.json(
            {
                message: 'Invalid token',
                code: 'INVALID_TOKEN',
            },
            { status: 401 },
        );
    }
    return session;
}
