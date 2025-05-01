import { MangaSiteRoutes } from './const/mangasite';
import type { MangaSiteRoutesType, RouteID } from './types/router';

const main = () => '/mangasite';
const manga = (id: RouteID) => `/mangasite/manga/${id}`;
const catalog = () => `/mangasite/catalog`;
const collections = () => `/mangasite/collection`;
const readChapter = (mangaId: RouteID, chapterId: RouteID) =>
    `/mangasite/manga/${mangaId}/read/${chapterId}`;
// const collection = (id: RouteID) => `/mangasite/collection/${id}`;
// const profile = () => `/mangasite/profile`;
//TODO interate by route
export const getMangaSiteRoute = {
    main,
    manga,
    catalog,
    collections,
    readChapter,
};

export const MangaSiteRouteByPath: Record<string, MangaSiteRoutesType> = {
    [main()]: MangaSiteRoutes.MAIN,
    [manga(':id')]: MangaSiteRoutes.MANGA,
    [catalog()]: MangaSiteRoutes.CATALOG,
    [collections()]: MangaSiteRoutes.COLLECTIONS,
    [readChapter(':mangaId', ':chapterId')]: MangaSiteRoutes.READ_CHAPTER,
};
