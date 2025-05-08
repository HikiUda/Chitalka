import { RoutesConst, RoutesConstType } from '@/shared/config/router';
import { ReactNode } from 'react';
import { HeaderMainContent } from '../../ui/HeaderMainContent/HeaderMainContent';
import { HeaderQuickSearch } from '../../ui/HeaderQuickSearch/HeaderQuickSearch';
import { CatalogHeader } from '../../ui/CatalogHeader/CatalogHeader';
import { ReadChapterHeader } from '../../ui/ReadChapterHeader/ReadChapterHeader';

export const mapHeaderContent: Record<
    RoutesConstType | 'default',
    { desktop?: ReactNode; mobile?: ReactNode }
> = {
    default: { desktop: <HeaderMainContent />, mobile: <HeaderQuickSearch /> },
    [RoutesConst.CATALOG]: { mobile: <CatalogHeader /> },
    [RoutesConst.READ_CHAPTER]: {
        desktop: <ReadChapterHeader />,
        mobile: <ReadChapterHeader />,
    },
};
