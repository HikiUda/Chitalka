import type { AppRouterProps, MangaSiteRoutesType } from '@packages/model/src/config/router';
import { getMangaSiteRoute, MangaSiteRoutes } from '@packages/model/src/config/router';
import { MangaPage } from '@/pages/MangaPage';
import { MainPage } from '@/pages/MainPage';
import { CatalogPage } from '@/pages/CatalogPage';

export const routerConfig: Record<MangaSiteRoutesType, AppRouterProps> = {
    [MangaSiteRoutes.MAIN]: {
        path: getMangaSiteRoute.main(),
        element: <MainPage />,
    },
    [MangaSiteRoutes.MANGA]: {
        path: getMangaSiteRoute.manga(':id'),
        element: <MangaPage />,
    },
    [MangaSiteRoutes.CATALOG]: {
        path: getMangaSiteRoute.catalog(),
        element: <CatalogPage />,
    },
};
