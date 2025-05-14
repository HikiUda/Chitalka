import { RoutesConst } from './routesConst';
import type { RoutesConstType } from './routesConst';

type RouteID = string | number;

export const getRoute = {
    main: () => '/',
    manga: (id: RouteID) => `/manga/${id}`,
    catalog: () => `/catalog`,
    collections: () => `/collection`,
    readChapter: (mangaId: RouteID, chapterId: RouteID) => `/manga/${mangaId}/read/${chapterId}`,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
} as const satisfies Record<RoutesConstType, (...args: any[]) => string>;

export const RouteByPath: Record<string, RoutesConstType> = {
    [getRoute.main()]: RoutesConst.MAIN,
    [getRoute.manga(':id')]: RoutesConst.MANGA,
    [getRoute.catalog()]: RoutesConst.CATALOG,
    [getRoute.collections()]: RoutesConst.COLLECTIONS,
    [getRoute.readChapter(':mangaId', ':chapterId')]: RoutesConst.READ_CHAPTER,
};
