import { StateCreator } from 'zustand';
import { OrderType } from '@/shared/kernel/order';
import { CatalogFiltersStoreType } from '../catalogFiltersStroe.type';
import { SortByType } from '@/shared/api/deprecated/mangaList';

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
