import { FC } from 'react';
import { HStack } from '@/shared/deprecate-ui/Stack';
import { LogoMangaSite } from '@/entities/Logo';

interface CatalogHeaderProps {
    className?: string;
}

export const CatalogHeader: FC<CatalogHeaderProps> = (props) => {
    const { className } = props;

    return (
        <HStack className={className} justify="between">
            <LogoMangaSite />
            <HStack>
                {/* <SortByOrderMenu onApply={onApplyFilters} />
                <CatalogFiltersModal onApply={onApplyFilters} /> */}
            </HStack>
        </HStack>
    );
};
