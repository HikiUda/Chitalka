export const RoutesConst = {
    MAIN: 'main',
    MANGA: 'manga',
    CATALOG: 'catalog',
    READ_CHAPTER: 'readChapter',
    COLLECTIONS: 'collections',
    // COLLECTION: 'collection',
    // PROFILE: 'profile'
} as const;

export type RoutesConstType = ValueOf<typeof RoutesConst>;
