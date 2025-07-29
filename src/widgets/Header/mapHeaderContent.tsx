import { ComponentType, ReactNode } from 'react';
import { Routes } from '@/shared/kernel/router';
import { lazyNamed } from '@/shared/lib/helpers/lazyNamed';

type LazyHeader = Promise<{ Header: ComponentType }>;
const lazyHeader = (header: LazyHeader) => lazyNamed(() => header, 'Header');

const MainHeader = lazyHeader(import('./ui/main/MainHeader'));
const MainMobileHeader = lazyHeader(import('./ui/main/MainMobileHeader'));

// * Manga Headers
const MangaMainHeader = lazyHeader(import('./ui/main/MangaMainHeader'));
const MangaQuickSearchHeader = lazyHeader(import('./ui/quick-search/MangaQuickSearchHeader'));
const MangaCatalogHeader = lazyHeader(import('./ui/catalog/MangaCatalogHeader'));
const ReadMangaHeader = lazyHeader(import('./ui/book-read/ReadMangaHeader'));
// * Manga Headers

// * Ranobe Headers
const RanobeMainHeader = lazyHeader(import('./ui/main/RanobeMainHeader'));
const RanobeQuickSearchHeader = lazyHeader(import('./ui/quick-search/RanobeQuickSearchHeader'));
const RanobeCatalogHeader = lazyHeader(import('./ui/catalog/RanobeCatalogHeader'));
// * Ranobe Headers

type Platforms = { desktop?: ReactNode; mobile?: ReactNode };
type MapHeaderContent = OptionalRecord<Routes, Platforms> & {
    default: Required<Platforms>;
};

export const mapHeaderContent: MapHeaderContent = {
    // * Manga Pages
    [Routes.MANGA_SECTION]: { desktop: <MangaMainHeader />, mobile: <MangaQuickSearchHeader /> },
    [Routes.MANGA]: { desktop: <MangaMainHeader />, mobile: <MangaQuickSearchHeader /> },
    [Routes.MANGA_CATALOG]: { desktop: <MangaMainHeader />, mobile: <MangaCatalogHeader /> },
    [Routes.MANGA_READ]: {
        desktop: <ReadMangaHeader />,
        mobile: <ReadMangaHeader />,
    },
    // * Manga Pages

    // * Ranobe Pages
    [Routes.RANOBE_SECTION]: { desktop: <RanobeMainHeader />, mobile: <RanobeQuickSearchHeader /> },
    [Routes.RANOBE]: { desktop: <RanobeMainHeader />, mobile: <RanobeQuickSearchHeader /> },
    [Routes.RANOBE_CATALOG]: {
        desktop: <RanobeMainHeader />,
        mobile: <RanobeCatalogHeader />,
    },
    // * Ranobe Pages

    // * Default
    default: { desktop: <MainHeader />, mobile: <MainMobileHeader /> },
};
