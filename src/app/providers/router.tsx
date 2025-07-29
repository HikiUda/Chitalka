import { createBrowserRouter, Link } from 'react-router-dom';
import App from '../App';
import { getRoute, Routes } from '@/shared/kernel/router';

//TODO loading page add error page

export const router = createBrowserRouter([
    {
        element: <App />,
        children: [
            {
                path: Routes.MAIN,
                Component: () => (
                    <div className="flex gap-5">
                        <Link to={getRoute.MANGA_SECTION()}>manga</Link>
                        <Link to={getRoute.RANOBE_SECTION()}>ranobe</Link>
                    </div>
                ),
            },

            // * Manga Pages
            {
                path: Routes.MANGA_SECTION,
                lazy: () => import('@/pages/BookSectionPage/manga-section.page'),
            },
            {
                path: Routes.MANGA,
                lazy: () => import('@/pages/BookPage/manga.page'),
            },
            {
                path: Routes.MANGA_CATALOG,
                lazy: () => import('@/pages/CatalogPage/manga-catalog.page'),
            },
            {
                path: Routes.MANGA_READ,
                lazy: () => import('@/pages/ReadBookPage/read-manga.page'),
            },
            // * Manga Pages

            // * Ranobe Pages
            {
                path: Routes.RANOBE_SECTION,
                lazy: () => import('@/pages/BookSectionPage/ranobe-section.page'),
            },
            {
                path: Routes.RANOBE,
                lazy: () => import('@/pages/BookPage/ranobe.page'),
            },
            {
                path: Routes.RANOBE_CATALOG,
                lazy: () => import('@/pages/CatalogPage/ranobe-catalog.page'),
            },
            // * Ranobe Pages

            {
                path: Routes.COLLECTIONS,
                Component: () => <div />,
            },
            {
                path: Routes.NOTFOUND,
                Component: () => <div>NotFound</div>,
            },
        ],
    },
]);
