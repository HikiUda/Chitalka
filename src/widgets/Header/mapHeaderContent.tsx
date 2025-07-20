import { ReactNode } from 'react';
import { Routes } from '@/shared/kernel/router';
import { lazyNamed } from '@/shared/lib/helpers/lazyNamed';

const HeaderMain = lazyNamed(() => import('./ui/HeaderMain'), 'HeaderMain');
const HeaderQuickSearch = lazyNamed(() => import('./ui/HeaderQuickSearch'), 'HeaderQuickSearch');
const MangaCatalogHeader = lazyNamed(() => import('./ui/MangaCatalogHeader'), 'MangaCatalogHeader');
const ReadMangaHeader = lazyNamed(() => import('./ui/ReadMangaHeader'), 'ReadMangaHeader');

type Platforms = { desktop?: ReactNode; mobile?: ReactNode };

export const mapHeaderContent: OptionalRecord<
    Routes,
    { desktop?: ReactNode; mobile?: ReactNode }
> & { default: Required<Platforms> } = {
    [Routes.MANGA_CATALOG]: { mobile: <MangaCatalogHeader /> },
    [Routes.MANGA_READ]: {
        desktop: <ReadMangaHeader />,
        mobile: <ReadMangaHeader />,
    },
    default: { desktop: <HeaderMain />, mobile: <HeaderQuickSearch /> },
};
