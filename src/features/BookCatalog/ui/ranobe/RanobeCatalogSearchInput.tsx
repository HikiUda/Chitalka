import { CatalogSearchInput } from '../filters-build-blocks/CatalogSearchInput';
import { useSearch } from '../../model/slices/search/useSearch';
import { useRanobeCatalogFiltersStore } from '../../model/ranobe/useRanobeCatalogFiltersStore';
import { useRanobeCatalogApplyFilters } from '../../model/ranobe/useRanobeCatalogApplyFilters';
import { useKeyBoardEvent } from '@/shared/lib/hooks/useKeyBoardEvent';

type RanobeCatalogSearchInputProps = {
    className?: string;
};

export const RanobeCatalogSearchInput = (props: RanobeCatalogSearchInputProps) => {
    const { className } = props;

    const { applyFilters } = useRanobeCatalogApplyFilters();
    const search = useSearch(useRanobeCatalogFiltersStore.use);

    useKeyBoardEvent(applyFilters, 'Enter');

    return <CatalogSearchInput className={className} {...search} />;
};
