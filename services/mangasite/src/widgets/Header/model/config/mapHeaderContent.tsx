import { MangaSiteRoutesType } from '@packages/model/src/config/router';
import { ReactNode } from 'react';
import { HeaderMainContent } from '../../ui/HeaderMainContent/HeaderMainContent';
import { HeaderQuickSearch } from '../../ui/HeaderQuickSearch/HeaderQuickSearch';

export const mapHeaderContent: Record<
    MangaSiteRoutesType | 'default',
    { desktop?: ReactNode; mobile?: ReactNode }
> = {
    default: { desktop: <HeaderMainContent />, mobile: <HeaderQuickSearch /> },
};
