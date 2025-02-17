import { MainPage } from 'pages/MainPage';
import { MangaPage } from 'pages/MangaPage';

import type { AppRouterProps, MangaSiteRoutesType } from '@packages/model/src/config/router/types/router';
import { MangaSitePaths } from '@packages/model/src/config/router/mangaSiteRouter';
import { MangaSiteRoutes } from '@packages/model/src/config/router/const/mangasite';

export const routerConfig: Record<MangaSiteRoutesType, AppRouterProps> = {
    [MangaSiteRoutes.MAIN]: {
        path: MangaSitePaths.main,
        element: <MainPage />,
    },
    [MangaSiteRoutes.MANGA]: {
        path: MangaSitePaths.manga,
        element: <MangaPage />,
    },
};
