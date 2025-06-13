import { CatalogFilterSliceSelector } from '../../types';
import { OrderSlice } from './orderSlice';
import { useUrlSearchParams } from '@/shared/lib/hooks/useUrlSearchParams';

export function useOrder(slice: CatalogFilterSliceSelector<OrderSlice>) {
    const { setSearchParam } = useUrlSearchParams();
    const order = slice.order();
    const setOrder = slice.setOrder();

    const handleSetOrder = (order: 'asc' | 'desc') => {
        setOrder(order);
        setSearchParam('order', order);
    };

    return {
        order,
        setOrder: handleSetOrder,
    };
}
