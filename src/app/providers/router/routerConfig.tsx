import type { AppRouteProps, RoutesConstType } from '@/shared/config/router';
import { getRoute, RoutesConst } from '@/shared/config/router';
import { MangaPage } from '@/pages/MangaPage';
import { MainPage } from '@/pages/MainPage';
import { CatalogPage } from '@/pages/CatalogPage';
import { ReadChapterPage } from '@/pages/ReadChapterPage';

export const routerConfig: Record<RoutesConstType, AppRouteProps> = {
    [RoutesConst.MAIN]: {
        path: getRoute.main(),
        element: <MainPage />,
    },
    [RoutesConst.MANGA]: {
        path: getRoute.manga(':id'),
        element: <MangaPage />,
    },
    [RoutesConst.READ_CHAPTER]: {
        path: getRoute.readChapter(':mangaId', ':chapterId'),
        element: <ReadChapterPage />,
    },
    [RoutesConst.CATALOG]: {
        path: getRoute.catalog(),
        element: <CatalogPage />,
    },
    [RoutesConst.COLLECTIONS]: {
        path: getRoute.collections(),
        element: <div>collections</div>,
    },
};
