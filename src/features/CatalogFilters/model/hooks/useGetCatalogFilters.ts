import { clearObj } from '../helpers/clearObject';
import { useCatalogFiltersStore } from '../store/catalogFiltersStore';
import { CatalogFiltersScheme } from '@/shared/api/mangaList';

export function useGetCatalogFilters() {
    const getFilters = useCatalogFiltersStore.use.getFilters();

    const validateFilters = () => CatalogFiltersScheme.parse(clearObj(getFilters()));
    return { getFilters: validateFilters };
}
