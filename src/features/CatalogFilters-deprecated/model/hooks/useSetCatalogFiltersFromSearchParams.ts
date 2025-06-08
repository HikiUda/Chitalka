import { useUrlSearchParams } from '@/shared/lib/hooks/useUrlSearchParams';
import { categorierSearchParamsScheme } from '../schemes/categorierSearchParamsScheme';
import { clearObj } from '../helpers/clearObject';
import { useCatalogFiltersStore } from '../store/catalogFiltersStore';

export function useSetCatalogFiltersFromSearchParams() {
    const { getAllSearchParams } = useUrlSearchParams();
    const setInitialState = useCatalogFiltersStore.use.setInitialState();
    const resetAll = useCatalogFiltersStore.use.resetAll();

    const validateFilters = () =>
        clearObj(categorierSearchParamsScheme.parse(getAllSearchParams()));
    const setInitialFilters = () => {
        resetAll();
        return setInitialState(validateFilters());
    };
    return setInitialFilters;
}
