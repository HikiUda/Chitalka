import { delay, HttpResponse } from 'msw';
import { http } from '../http';
import {
    createRefreshTokenCookie,
    deleteRefreshTokenCookie,
    generateTokens,
    verifyToken,
} from '../session';

type User = {
    id: number;
    login: string;
    name: string;
    avatar: string | null;
};

const mockUsers: User[] = [
    {
        id: 1,
        login: 'HikiUda',
        name: 'HikiUda',
        avatar: null,
    },
];

const userPasswords = new Map<string, string>();
userPasswords.set('HikiUda', '1234567890');

export const authHandlers = [
    http.post('/auth/login', async ({ request }) => {
        const body = await request.json();
        console.log('lol');

        const user = mockUsers.find((u) => u.login === body.login);
        const storedPassword = userPasswords.get(body.login);

        await delay();

        if (!user || !storedPassword || storedPassword !== body.password) {
            return HttpResponse.json(
                {
                    message: 'Неверный login или пароль',
                    statusCode: 401,
                    error: 'INVALID_CREDENTIALS',
                },
                { status: 401 },
            );
        }

        const { accessToken, refreshToken } = await generateTokens(user);

        return HttpResponse.json(
            {
                access: accessToken,
            },
            {
                status: 200,
                headers: {
                    'Set-Cookie': createRefreshTokenCookie(refreshToken),
                },
            },
        );
    }),

    http.post('/auth/registration', async ({ request }) => {
        const body = await request.json();

        await delay();

        if (mockUsers.some((u) => u.login === body.login)) {
            return HttpResponse.json(
                {
                    message: 'Пользователь уже существует',
                    statusCode: 400,
                    error: 'USER_EXISTS',
                },
                { status: 400 },
            );
        }

        const newUser: User = {
            id: mockUsers.length + 1,
            login: body.login,
            name: body.login,
            avatar: null,
        };

        const { accessToken, refreshToken } = await generateTokens(newUser);

        mockUsers.push(newUser);
        userPasswords.set(body.login, body.password);

        return HttpResponse.json(
            {
                access: accessToken,
            },
            {
                status: 201,
                headers: {
                    'Set-Cookie': createRefreshTokenCookie(refreshToken),
                },
            },
        );
    }),
    http.delete('/auth/logout', async () => {
        await delay();

        return new HttpResponse(null, {
            status: 204,
            headers: {
                'Set-Cookie': deleteRefreshTokenCookie(),
            },
        });
    }),
    http.get('/auth/refresh', async ({ cookies }) => {
        const refreshToken = cookies.refreshToken;

        if (!refreshToken) {
            return HttpResponse.json(
                {
                    message: 'Refresh token не найден',
                    statusCode: 401,
                    error: 'REFRESH_TOKEN_MISSING',
                },
                { status: 401 },
            );
        }

        try {
            const session = await verifyToken(refreshToken);
            const user = mockUsers.find((u) => u.id === session.id);

            if (!user) {
                throw new Error('User not found');
            }

            const { accessToken, refreshToken: newRefreshToken } = await generateTokens(user);

            return HttpResponse.json(
                {
                    access: accessToken,
                },
                {
                    status: 200,
                    headers: {
                        'Set-Cookie': createRefreshTokenCookie(newRefreshToken),
                    },
                },
            );
        } catch (error) {
            console.error('Error refreshing token:', error);
            return HttpResponse.json(
                {
                    message: 'Недействительный refresh token',
                    statusCode: 401,
                    error: 'INVALID_REFRESH_TOKEN',
                },
                { status: 401 },
            );
        }
    }),
];
