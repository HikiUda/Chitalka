import type { AppRouterProps, MangaSiteRoutesType } from '@packages/model/src/config/router';
import { getMangaSiteRoute, MangaSiteRoutes } from '@packages/model/src/config/router';
import { MangaPage } from '@/pages/MangaPage';
import { MainPage } from '@/pages/MainPage';
import { CatalogPage } from '@/pages/CatalogPage';
import { ReadChapterPage } from '@/pages/ReadChapterPage';

export const routerConfig: Record<MangaSiteRoutesType, AppRouterProps> = {
    [MangaSiteRoutes.MAIN]: {
        path: getMangaSiteRoute.main(),
        element: <MainPage />,
    },
    [MangaSiteRoutes.MANGA]: {
        path: getMangaSiteRoute.manga(':id'),
        element: <MangaPage />,
    },
    [MangaSiteRoutes.READ_CHAPTER]: {
        path: getMangaSiteRoute.readChapter(':mangaId', ':chapterId'),
        element: <ReadChapterPage />,
    },
    [MangaSiteRoutes.CATALOG]: {
        path: getMangaSiteRoute.catalog(),
        element: <CatalogPage />,
    },
};
