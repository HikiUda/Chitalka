import { useState } from 'react';
import { CatalogFiltersSheetLayout } from '../layout/CatalogFiltersSheetLayout';
import { lazyNamed } from '@/shared/lib/helpers/lazyNamed';

const MangaCatalogFilters = lazyNamed(() => import('./MangaCatalogFilters'), 'MangaCatalogFilters');

type MangaCatalogFiltersSheetProps = {
    className?: string;
};

export const MangaCatalogFiltersSheet = (props: MangaCatalogFiltersSheetProps) => {
    const { className } = props;
    const [open, setOpen] = useState(false);

    return (
        <CatalogFiltersSheetLayout className={className} open={open} onOpenChange={setOpen}>
            <MangaCatalogFilters onApply={() => setOpen(false)} />
        </CatalogFiltersSheetLayout>
    );
};
