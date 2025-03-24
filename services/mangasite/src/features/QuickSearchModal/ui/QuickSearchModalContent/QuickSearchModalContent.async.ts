import { lazy } from 'react';

export const QuickSearchModalContentAsync = lazy(
    () => import('../QuickSearchModalContent/QuickSearchModalContent'),
);
