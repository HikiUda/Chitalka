import { CatalogFilterInitialState, CatalogFilterSlice } from '../../types';

export type OrderType = 'asc' | 'desc';

export type OrderSlice = {
    order: OrderType;
    setOrder: (order: OrderType) => void;
};

export const orderSliceInitialState: CatalogFilterInitialState<OrderSlice> = {
    order: 'desc',
};

export const createOrderSlice: CatalogFilterSlice<OrderSlice> = (storeName) => (set) => ({
    ...orderSliceInitialState,
    setOrder: (order) => set(() => ({ order }), false, `${storeName}/setOrder`),
});
