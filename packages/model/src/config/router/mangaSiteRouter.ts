import { MangaSiteRoutes } from './const/mangasite';
import type { MangaSiteRoutesType, RouteID } from './types/router';

export const MangaSitePaths: Record<MangaSiteRoutesType, string> = {
    [MangaSiteRoutes.MAIN]: '/mangasite',
    [MangaSiteRoutes.MANGA]: '/mangasite/manga',
};

const main = () => '/mangasite';
const manga = (id: RouteID) => `/mangasite/manga/${id}`;

export const getMangaSiteRoute = {
    main,
    manga,
};
