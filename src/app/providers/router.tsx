import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import { Routes } from '@/shared/kernel/router';
import { ReadChapterPage } from '@/pages/ReadChapterPage';

//TODO loading page add error page

export const router = createBrowserRouter([
    {
        element: <App />,
        children: [
            {
                path: Routes.MAIN,
                lazy: () => import('@/pages/MainPage/main.page'),
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
                lazy: async () => ({ Component: ReadChapterPage }),
            },
            {
                path: Routes.COLLECTIONS,
                Component: () => <div />,
            },
        ],
    },
]);
