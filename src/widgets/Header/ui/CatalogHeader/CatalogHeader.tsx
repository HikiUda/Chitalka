import { FC, useCallback } from 'react';
import { HStack } from '@/shared/ui/Stack';
import { useQueryClient } from '@tanstack/react-query';
import { LogoMangaSite } from '@/entities/Logo';
import { CatalogFiltersModal, SortByOrderMenu } from '@/features/CatalogFilters';
import { CatalogApi } from '@/shared/api/mangaList';

interface CatalogHeaderProps {
    className?: string;
}

export const CatalogHeader: FC<CatalogHeaderProps> = (props) => {
    const { className } = props;

    const queryClient = useQueryClient();

    const onApplyFilters = useCallback(() => {
        queryClient.invalidateQueries({
            queryKey: CatalogApi.getMangaInfinityQueryOptions(() => ({}) as never).queryKey,
        });
    }, [queryClient]);

    return (
        <HStack className={className} justify="between">
            <LogoMangaSite />
            <HStack>
                <SortByOrderMenu onApply={onApplyFilters} />
                <CatalogFiltersModal onApply={onApplyFilters} />
            </HStack>
        </HStack>
    );
};
