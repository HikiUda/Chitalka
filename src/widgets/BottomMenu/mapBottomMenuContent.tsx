import { ComponentType, ReactNode } from 'react';
import { Routes } from '@/shared/kernel/router';
import { lazyNamed } from '@/shared/lib/helpers/lazyNamed';

type LazyBottomMenu = Promise<{ BottomMenu: ComponentType }>;
const lazyBottomMenu = (bottomMenu: LazyBottomMenu) => lazyNamed(() => bottomMenu, 'BottomMenu');

const MainBottomMenu = lazyBottomMenu(import('./ui/main/MainBottomMenu'));
const MangaMainBottomMenu = lazyBottomMenu(import('./ui/main/MangaMainBottomMenu'));
const RanobeMainBottomMenu = lazyBottomMenu(import('./ui/main/RanobeMainBottomMenu'));
const ReadMangaBottomMenu = lazyBottomMenu(import('./ui/book-read/ReadMangaBottomMenu'));

export const mapBottomMenuContent: OptionalRecord<Routes, ReactNode> & {
    default: ReactNode;
} = {
    // * Manga BottomMenu
    [Routes.MANGA_SECTION]: <MangaMainBottomMenu />,
    [Routes.MANGA]: <MangaMainBottomMenu />,
    [Routes.MANGA_CATALOG]: <MangaMainBottomMenu />,
    [Routes.MANGA_READ]: <ReadMangaBottomMenu />,
    // * Manga BottomMenu

    // * Ranobe BottomMenu
    [Routes.RANOBE_SECTION]: <RanobeMainBottomMenu />,
    [Routes.RANOBE]: <RanobeMainBottomMenu />,
    [Routes.RANOBE_CATALOG]: <RanobeMainBottomMenu />,
    // * Ranobe BottomMenu

    // * Default
    default: <MainBottomMenu />,
};
