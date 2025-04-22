import { useUrlSearchParams } from '@packages/model/src/lib/hooks/useUrlSearchParams';
import { categorierSearchParamsScheme } from '../schemes/categorierSearchParamsScheme';
import { clearObj } from '../helpers/clearObject';
import { useCatalogFiltersStore } from '../store/catalogFiltersStore';

export function useSetCatalogFiltersFromSearchParams() {
    const { getAllSearchParams } = useUrlSearchParams();
    const setInitialState = useCatalogFiltersStore.use.setInitialState();

    const validateFilters = () =>
        clearObj(categorierSearchParamsScheme.parse(getAllSearchParams()));
    const setInitialFilters = () => setInitialState(validateFilters());
    return setInitialFilters;
}
