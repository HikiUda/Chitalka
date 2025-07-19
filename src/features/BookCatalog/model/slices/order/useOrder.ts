import { CatalogFilterSliceSelector } from '../../types';
import { OrderSlice } from './orderSlice';

export function useOrder(slice: CatalogFilterSliceSelector<OrderSlice>) {
    const order = slice.order();
    const setOrder = slice.setOrder();

    return {
        order,
        setOrder,
    };
}
