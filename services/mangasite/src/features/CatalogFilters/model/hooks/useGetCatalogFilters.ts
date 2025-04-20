import { useCatalogFiltersStore } from '../store/catalogFiltersStore';

export function useGetCatalogFilters() {
    const getFilters = useCatalogFiltersStore.use.getFilters();
    return getFilters;
}
