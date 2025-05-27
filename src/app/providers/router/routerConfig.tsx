import { RouteProps } from 'react-router-dom';
import { Suspense } from 'react';
import type { RoutesConstType } from '@/shared/kernel/router';
import { getRoute, RoutesConst } from '@/shared/kernel/router';
import { MainPage } from '@/pages/MainPage';
import { CatalogPage } from '@/pages/CatalogPage';
import { ReadChapterPage } from '@/pages/ReadChapterPage';
import { lazyImport } from '@/shared/lib/helpers/lazyImport';
import { Page } from '@/shared/layout/Page';
import { Loader } from '@/shared/ui/kit/loader';

//TODO loading page add error page
const MangaPage = lazyImport(() => import('@/pages/MangaPage'), 'MangaPage');

export type AppRouteProps = RouteProps & {
    authOnly?: boolean;
};

export const routerConfig: Record<RoutesConstType, AppRouteProps> = {
    [RoutesConst.MAIN]: {
        path: getRoute.main(),
        element: <MainPage />,
    },
    [RoutesConst.MANGA]: {
        path: getRoute.manga(':mangaId'),
        element: (
            <Suspense
                fallback={
                    <Page>
                        <Loader variant="flower" />
                    </Page>
                }
            >
                <MangaPage />
            </Suspense>
        ),
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
