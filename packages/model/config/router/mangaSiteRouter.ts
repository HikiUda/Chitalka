import { MangaSiteRoutes } from './const/mangasite';
import type { MangaSiteRoutesType } from './types/router';

export const MangaSitePaths: Record<MangaSiteRoutesType, string> = {
    [MangaSiteRoutes.MAIN]: '/mangasite',
    [MangaSiteRoutes.MANGA]: '/mangasite/manga',
};
