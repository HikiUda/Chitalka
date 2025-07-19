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
    PROFILE: 'profile/:userId',

    NOTFOUND: '*',
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

    [Routes.PROFILE]: {
        userId: string;
    };
};

declare module 'react-router-dom' {
    interface Register {
        params: PathParams;
    }
}
