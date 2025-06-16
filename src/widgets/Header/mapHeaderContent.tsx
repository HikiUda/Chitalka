import { ReactNode } from 'react';
import { HeaderMain } from './ui/HeaderMain';
import { HeaderQuickSearch } from './ui/HeaderQuickSearch';
import { CatalogHeader } from './ui/CatalogHeader';
import { ReadChapterHeader } from './ui/ReadChapterHeader/ReadChapterHeader';
import { Routes, RoutesValues } from '@/shared/kernel/router';

type Platforms = { desktop?: ReactNode; mobile?: ReactNode };

export const mapHeaderContent: OptionalRecord<
    RoutesValues,
    { desktop?: ReactNode; mobile?: ReactNode }
> & { default: Required<Platforms> } = {
    default: { desktop: <HeaderMain />, mobile: <HeaderQuickSearch /> },
    [Routes.MANGA_CATALOG]: { mobile: <CatalogHeader /> },
    [Routes.MANGA_READ]: {
        desktop: <ReadChapterHeader />,
        mobile: <ReadChapterHeader />,
    },
};
