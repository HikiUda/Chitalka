import { useCatalogFiltersStore } from '../store/catalogFiltersStore';
import { CatalogFiltersScheme } from '@/shared/api/mangaList';

function clearObj(original: object): object {
    return Object.fromEntries(
        Object.entries(original).filter(
            ([_, value]) =>
                value !== null &&
                value !== undefined &&
                !Number.isNaN(value) &&
                !(Array.isArray(value) && value.length === 0),
        ),
    );
}
export function useGetCatalogFilters() {
    const getFilters = useCatalogFiltersStore.use.getFilters();

    const validateFilters = () => CatalogFiltersScheme.parse(clearObj(getFilters()));
    return { getFilters: validateFilters };
}
