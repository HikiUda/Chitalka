import { CatalogSearchInput } from '../filters-build-blocks/CatalogSearchInput';
import { useSearch } from '../../model/slices/search/useSearch';
import { useMangaCatalogFiltersStore } from '../../model/manga/mangaCatalogFiltersStore';
import { useApplyMangaCatalogFilters } from '../../model/manga/useApplyMangaCatalogFilters';
import { useKeyBoardEvent } from '@/shared/lib/hooks/useKeyBoardEvent';

type MangaCatalogSearchInputProps = {
    className?: string;
};

export const MangaCatalogSearchInput = (props: MangaCatalogSearchInputProps) => {
    const { className } = props;

    const { applyFilters } = useApplyMangaCatalogFilters();
    const search = useSearch(useMangaCatalogFiltersStore.use);

    useKeyBoardEvent(applyFilters, 'Enter');

    return <CatalogSearchInput className={className} {...search} />;
};
