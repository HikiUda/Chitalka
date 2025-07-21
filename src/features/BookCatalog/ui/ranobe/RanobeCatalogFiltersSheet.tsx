import { useState } from 'react';
import { CatalogFiltersSheetLayout } from '../layout/CatalogFiltersSheetLayout';
import { lazyNamed } from '@/shared/lib/helpers/lazyNamed';

const RanobeCatalogFilters = lazyNamed(
    () => import('./RanobeCatalogFilters'),
    'RanobeCatalogFilters',
);

type RanobeCatalogFiltersSheetProps = {
    className?: string;
};

export const RanobeCatalogFiltersSheet = (props: RanobeCatalogFiltersSheetProps) => {
    const { className } = props;
    const [open, setOpen] = useState(false);

    return (
        <CatalogFiltersSheetLayout className={className} open={open} onOpenChange={setOpen}>
            <RanobeCatalogFilters onApply={() => setOpen(false)} />
        </CatalogFiltersSheetLayout>
    );
};
