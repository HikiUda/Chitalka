import { CatalogSearchInput } from '../filters-build-blocks/CatalogSearchInput';
import { useSearch } from '../../model/slices/search/useSearch';
import { useMangaCatalogFiltersStore } from '../../model/manga/mangaCatalogFiltersStore';

interface MangaCatalogSearchInputProps {
    className?: string;
}

export const MangaCatalogSearchInput = (props: MangaCatalogSearchInputProps) => {
    const { className } = props;

    const search = useSearch(useMangaCatalogFiltersStore.use);

    return <CatalogSearchInput className={className} {...search} />;
};
