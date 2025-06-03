import { href } from 'react-router-dom';

/* eslint-disable @typescript-eslint/no-explicit-any */
export const Routes = {
    MAIN: '/',
    MANGA: '/manga/:mangaId',
    MANGA_CATALOG: '/catalog/manga',
    MANGA_READ: '/manga/:mangaId/read/:chapterId',
    COLLECTIONS: '/collections',
    // COLLECTION: 'collection',
    // PROFILE: 'profile'
} as const;

export type RoutesValues = ValueOf<typeof Routes>;

export type PathParams = {
    [Routes.MANGA]: {
        mangaId: string;
    };
    [Routes.MANGA_READ]: {
        mangaId: string;
        chapterId: string;
    };
};

declare module 'react-router-dom' {
    interface Register {
        params: PathParams;
    }
}

type RouteID = string | number;

export const getRoute = {
    MAIN: () => Routes.MAIN,
    MANGA: (mangaId: RouteID) => href(Routes.MANGA, { mangaId: String(mangaId) }),
    MANGA_CATALOG: () => Routes.MANGA_CATALOG,
    MANGA_READ: (mangaId: RouteID, chapterId: RouteID) =>
        href(Routes.MANGA_READ, { mangaId: String(mangaId), chapterId: String(chapterId) }),
    COLLECTIONS: () => Routes.COLLECTIONS,
} as const satisfies Record<keyof typeof Routes, (...args: any[]) => string>;
