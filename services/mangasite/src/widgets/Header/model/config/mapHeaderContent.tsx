import { MangaSiteRoutes, MangaSiteRoutesType } from '@packages/model/src/config/router';
import { ReactNode } from 'react';
import { HeaderMainContent } from '../../ui/HeaderMainContent/HeaderMainContent';
import { HeaderQuickSearch } from '../../ui/HeaderQuickSearch/HeaderQuickSearch';
import { CatalogHeader } from '../../ui/CatalogHeader/CatalogHeader';

export const mapHeaderContent: Record<
    MangaSiteRoutesType | 'default',
    { desktop?: ReactNode; mobile?: ReactNode }
> = {
    default: { desktop: <HeaderMainContent />, mobile: <HeaderQuickSearch /> },
    [MangaSiteRoutes.CATALOG]: { mobile: <CatalogHeader /> },
};
