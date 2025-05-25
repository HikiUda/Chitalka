import { RoutesConst } from './routesConst';
import type { RoutesConstType } from './routesConst';

type RouteID = string | number;
//TODO react-router-dom register for type useParmas
//TODO getRotueTemplete. collision between appConfig and RouteByPath
export const getRoute = {
    main: () => '/',
    manga: (mangaId: RouteID) => `/manga/${mangaId}`,
    catalog: () => `/catalog`,
    collections: () => `/collection`,
    readChapter: (mangaId: RouteID, chapterId: RouteID) => `/manga/${mangaId}/read/${chapterId}`,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
} as const satisfies Record<RoutesConstType, (...args: any[]) => string>;

export const RouteByPath: Record<string, RoutesConstType> = {
    [getRoute.main()]: RoutesConst.MAIN,
    [getRoute.manga(':mangaId')]: RoutesConst.MANGA,
    [getRoute.catalog()]: RoutesConst.CATALOG,
    [getRoute.collections()]: RoutesConst.COLLECTIONS,
    [getRoute.readChapter(':mangaId', ':chapterId')]: RoutesConst.READ_CHAPTER,
};
