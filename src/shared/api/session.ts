import { create } from 'zustand';
import { jwtDecode } from 'jwt-decode';
import { publicFetchClient } from './instance';

type Session = {
    userId: string;
    email: string;
    exp: number;
    iat: number;
};

const TOKEN_KEY = 'token';

let refreshTokenPromise: Promise<string | null> | null = null;

interface SessionStore {
    token: string | null;
    session: Session | null;
    login: (token: string) => void;
    logout: () => void;
    refreshToken: () => Promise<string | null>;
}

export const useSession = create<SessionStore>((set, get) => {
    const rawToken = localStorage.getItem(TOKEN_KEY);
    const session = rawToken ? jwtDecode<Session>(rawToken) : null;

    return {
        token: rawToken,
        session,

        login: (token) => {
            localStorage.setItem(TOKEN_KEY, token);
            const session = jwtDecode<Session>(token);
            set({ token, session });
        },

        logout: () => {
            localStorage.removeItem(TOKEN_KEY);
            set({ token: null, session: null });
        },

        refreshToken: async () => {
            const { token, login, logout } = get();

            if (!token) return null;

            const session = jwtDecode<Session>(token);
            const now = Date.now() / 1000;

            if (session.exp < now) {
                if (!refreshTokenPromise) {
                    refreshTokenPromise = publicFetchClient
                        .GET('/auth/refresh')
                        .then((r) => r.data?.tokens.access ?? null)
                        .then((newToken) => {
                            if (newToken) {
                                login(newToken);
                                return newToken;
                            } else {
                                logout();
                                return null;
                            }
                        })
                        .finally(() => {
                            refreshTokenPromise = null;
                        });
                }

                return await refreshTokenPromise;
            }

            return token;
        },
    };
});
