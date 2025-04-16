import { MangaSiteRoutes } from './const/mangasite';
import type { MangaSiteRoutesType, RouteID } from './types/router';

const main = () => '/mangasite';
const manga = (id: RouteID) => `/mangasite/manga/${id}`;
const catalog = () => `/mangasite/catalog`;
const collections = () => `/mangasite/collection`;
// const collection = (id: RouteID) => `/mangasite/collection/${id}`;
// const read = (id: RouteID, chapter: RouteID) => `/mangasite/manga/${id}/read/${chapter}`;
// const profile = () => `/mangasite/profile`;
//TODO interate by route
export const getMangaSiteRoute = {
    main,
    manga,
    catalog,
    collections,
};

export const MangaSiteRouteByPath: Record<string, MangaSiteRoutesType> = {
    [main()]: MangaSiteRoutes.MAIN,
    [manga(':id')]: MangaSiteRoutes.MANGA,
    [catalog()]: MangaSiteRoutes.CATALOG,
    [collections()]: MangaSiteRoutes.COLLECTIONS,
};
