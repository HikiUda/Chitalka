import { href } from 'react-router-dom';

/* eslint-disable @typescript-eslint/no-explicit-any */
export const Routes = {
    MAIN: '/',

    // * Manga
    MANGA: '/manga/:mangaId',
    MANGA_CATALOG: '/catalog/manga',
    MANGA_READ: '/manga/:mangaId/read/:chapterId',
    // * Manga

    // * Ranobe
    RANOBE: '/ranobe/:ranobeId',
    RANOBE_CATALOG: '/catalog/ranobe',
    RANOBE_READ: '/ranobe/:ranobeId/read/:chapterId',
    // * Ranobe

    // * People
    PEOPLE: '/people',
    PEOPLE_NAME: '/people/:name',
    // * People

    COLLECTIONS: '/collections',
    // COLLECTION: 'collection',
    // PROFILE: 'profile'
} as const;
export type Routes = ValueOf<typeof Routes>;

export type PathParams = {
    // * Manga
    [Routes.MANGA]: {
        mangaId: string;
    };
    [Routes.MANGA_READ]: {
        mangaId: string;
        chapterId: string;
    };
    // * Manga

    // * Ranobe
    [Routes.RANOBE]: {
        ranobeId: string;
    };
    [Routes.RANOBE_READ]: {
        ranobeId: string;
        chapterId: string;
    };
    // * Ranobe

    // * People
    [Routes.PEOPLE_NAME]: {
        name: string;
    };
    // * People
};

declare module 'react-router-dom' {
    interface Register {
        params: PathParams;
    }
}

type RouteID = string | number;

export const getRoute = {
    MAIN: () => Routes.MAIN,

    // * Manga
    MANGA: (mangaId: RouteID) => href(Routes.MANGA, { mangaId: String(mangaId) }),
    MANGA_CATALOG: () => Routes.MANGA_CATALOG,
    MANGA_READ: (mangaId: RouteID, chapterId: RouteID) =>
        href(Routes.MANGA_READ, { mangaId: String(mangaId), chapterId: String(chapterId) }),
    // * Manga

    // * Ranobe
    RANOBE: (ranobeId: RouteID) => href(Routes.RANOBE, { ranobeId: String(ranobeId) }),
    RANOBE_CATALOG: () => Routes.RANOBE_CATALOG,
    RANOBE_READ: (ranobeId: RouteID, chapterId: RouteID) =>
        href(Routes.RANOBE_READ, { ranobeId: String(ranobeId), chapterId: String(chapterId) }),
    // * Ranobe

    // * People
    PEOPLE: () => Routes.PEOPLE,
    PEOPLE_NAME: (name: string) => href(Routes.PEOPLE_NAME, { name }),
    // * People

    COLLECTIONS: () => Routes.COLLECTIONS,
} as const satisfies Record<keyof typeof Routes, (...args: any[]) => string>;
