import { StateCreator } from 'zustand';
import { CatalogFiltersStoreType } from '../catalogFiltersStroe.type';
import { SortByType, OrderType } from '@/shared/api/mangaList';

export interface SortByOrderSlice {
    sortBy: SortByType;
    order: OrderType;
    setSortBy: (sortBy: SortByType) => void;
    setOrder: (order: OrderType) => void;
}

export const sortByOrderSliceInitialState: Pick<SortByOrderSlice, 'sortBy' | 'order'> = {
    order: 'desc',
    sortBy: 'rating',
};

export const createSortByOrderSlice: StateCreator<
    CatalogFiltersStoreType,
    [['zustand/devtools', never]],
    [],
    SortByOrderSlice
> = (set) => ({
    ...sortByOrderSliceInitialState,
    setOrder: (order) => set(() => ({ order }), false, 'CatalogFiltersStore/setOrder'),
    setSortBy: (sortBy) => set(() => ({ sortBy }), false, 'CatalogFiltersStore/setSortBy'),
});
