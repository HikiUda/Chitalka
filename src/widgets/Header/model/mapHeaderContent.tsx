import { ReactNode } from 'react';
import { HeaderMainContent } from '../ui/HeaderMainContent/HeaderMainContent';
import { HeaderQuickSearch } from '../ui/HeaderQuickSearch/HeaderQuickSearch';
import { CatalogHeader } from '../ui/CatalogHeader/CatalogHeader';
import { ReadChapterHeader } from '../ui/ReadChapterHeader/ReadChapterHeader';
import { Routes, RoutesValues } from '@/shared/kernel/router';

type Platforms = { desktop?: ReactNode; mobile?: ReactNode };

export const mapHeaderContent: OptionalRecord<
    RoutesValues,
    { desktop?: ReactNode; mobile?: ReactNode }
> & { default: Required<Platforms> } = {
    default: { desktop: <HeaderMainContent />, mobile: <HeaderQuickSearch /> },
    [Routes.MANGA_CATALOG]: { mobile: <CatalogHeader /> },
    [Routes.MANGA_READ]: {
        desktop: <ReadChapterHeader />,
        mobile: <ReadChapterHeader />,
    },
};
