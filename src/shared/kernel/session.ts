import { create } from 'zustand';
import { jwtDecode } from 'jwt-decode';
import { devtools } from 'zustand/middleware';
import createFetchClient from 'openapi-fetch';
import { ApiPaths } from '../api/instance';
import { CONFIG } from './config';

const baseFetchClient = createFetchClient<ApiPaths>({
    baseUrl: CONFIG.API_BASE_URL,
    credentials: 'include',
});

type Session = {
    id: number;
    login: string;
    name: string;
    sub: number;
    exp: number;
    iat: number;
};

const TOKEN_KEY = 'access';

let refreshTokenPromise: Promise<string | null> | null = null;

interface SessionStore {
    token: string | null;
    session: Session | null;
    login: (token: string) => void;
    logout: () => void;
    refreshToken: () => Promise<string | null>;
}

export const useSessionStore = create<SessionStore>()(
    devtools(
        (set, get) => {
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
                            refreshTokenPromise = baseFetchClient
                                .GET('/auth/refresh')
                                .then((r) => r.data?.access ?? null)
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
        },
        { name: 'SessionStore' },
    ),
);

export function useSession() {
    const session = useSessionStore((state) => state.session);
    const login = useSessionStore((state) => state.login);
    const logout = useSessionStore((state) => state.logout);
    const refreshToken = useSessionStore((state) => state.refreshToken);

    return { session, login, logout, refreshToken, isUserAuth: !!session };
}
