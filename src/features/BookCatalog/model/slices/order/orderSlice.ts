import { CatalogFilterInitialState, CatalogFilterSlice } from '../../helpers/types';

export type Order = 'asc' | 'desc';

export type OrderSlice = {
    order: Order;
    setOrder: (order: Order) => void;
};

export const orderSliceInitialState: CatalogFilterInitialState<OrderSlice> = {
    order: 'desc',
};

export const createOrderSlice: CatalogFilterSlice<OrderSlice> = (storeName) => (set) => ({
    ...orderSliceInitialState,
    setOrder: (order) => set(() => ({ order }), false, `${storeName}/setOrder`),
});
