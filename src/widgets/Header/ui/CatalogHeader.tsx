import { LogoMangaSite } from '@/entities/Logo';
import { MangaCatalogFiltersSheet, MangaCatalogSortByOrder } from '@/features/CatalogFilters';
import { HeaderLayout } from '@/shared/ui/layout/HeaderLayout';

export const CatalogHeader = () => {
    return (
        <HeaderLayout className="bg-secondary">
            <div className="flex items-center justify-between">
                <LogoMangaSite />
                <div className="flex items-center gap-2">
                    <MangaCatalogFiltersSheet />
                    <MangaCatalogSortByOrder />
                </div>
            </div>
        </HeaderLayout>
    );
};
