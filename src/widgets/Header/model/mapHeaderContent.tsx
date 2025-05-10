import { ReactNode } from 'react';
import { HeaderMainContent } from '../ui/HeaderMainContent/HeaderMainContent';
import { HeaderQuickSearch } from '../ui/HeaderQuickSearch/HeaderQuickSearch';
import { CatalogHeader } from '../ui/CatalogHeader/CatalogHeader';
import { ReadChapterHeader } from '../ui/ReadChapterHeader/ReadChapterHeader';
import { RoutesConst, RoutesConstType } from '@/shared/config/router';

type Platforms = { desktop?: ReactNode; mobile?: ReactNode };

export const mapHeaderContent: OptionalRecord<
    RoutesConstType,
    { desktop?: ReactNode; mobile?: ReactNode }
> & { default: Required<Platforms> } = {
    default: { desktop: <HeaderMainContent />, mobile: <HeaderQuickSearch /> },
    [RoutesConst.CATALOG]: { mobile: <CatalogHeader /> },
    [RoutesConst.READ_CHAPTER]: {
        desktop: <ReadChapterHeader />,
        mobile: <ReadChapterHeader />,
    },
};
