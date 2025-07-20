import { CatalogSearchInput } from '../filters-build-blocks/CatalogSearchInput';
import { useSearch } from '../../model/slices/search/useSearch';
import { useMangaCatalogFiltersStore } from '../../model/manga/useMangaCatalogFiltersStore';
import { useMangaCatalogApplyFilters } from '../../model/manga/useMangaCatalogApplyFilters';
import { useKeyBoardEvent } from '@/shared/lib/hooks/useKeyBoardEvent';

type MangaCatalogSearchInputProps = {
    className?: string;
};

export const MangaCatalogSearchInput = (props: MangaCatalogSearchInputProps) => {
    const { className } = props;

    const { applyFilters } = useMangaCatalogApplyFilters();
    const search = useSearch(useMangaCatalogFiltersStore.use);

    useKeyBoardEvent(applyFilters, 'Enter');

    return <CatalogSearchInput className={className} {...search} />;
};
