import { CatalogSearchInput } from '../filters-build-blocks/CatalogSearchInput';
import { useSearch } from '../../model/slices/search/useSearch';
import { useMangaCatalogFiltersStore } from '../../model/manga/mangaCatalogFiltersStore';
import { useApplyMangaFilters } from '../../model/manga/useApplyMangaFilters';
import { useKeyBoardEvent } from '@/shared/lib/hooks/useKeyBoardEvent';

interface MangaCatalogSearchInputProps {
    className?: string;
}

export const MangaCatalogSearchInput = (props: MangaCatalogSearchInputProps) => {
    const { className } = props;

    const { applyFilters } = useApplyMangaFilters();
    const search = useSearch(useMangaCatalogFiltersStore.use);

    useKeyBoardEvent(applyFilters, 'Enter');

    return <CatalogSearchInput className={className} {...search} />;
};
