import { MangaCatalogFiltersSheet, MangaCatalogSortByOrder } from '@/features/CatalogFilters';
import { HeaderLayout } from '@/shared/ui/layout/HeaderLayout';
import { LogoShort } from '@/shared/ui/Logo';

export const MangaCatalogHeader = () => {
    return (
        <HeaderLayout>
            <div className="flex items-center justify-between">
                <LogoShort />
                <div className="flex items-center gap-2">
                    <MangaCatalogFiltersSheet />
                    <MangaCatalogSortByOrder />
                </div>
            </div>
        </HeaderLayout>
    );
};
