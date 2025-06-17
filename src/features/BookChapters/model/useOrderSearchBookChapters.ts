import { useCallback, useState } from 'react';
import { useDebounce } from '@/shared/lib/hooks/useDebounce';

type Order = 'asc' | 'desc';

export function useOrderSearchBookChapters(refetch: () => void) {
    const [order, setOrder] = useState<Order>('desc');
    const [search, setSearch] = useState('');
    const handleRefetch = useDebounce(refetch, 500);

    const handleSetSearch = useCallback(
        (value: string) => {
            setSearch(value);
            handleRefetch();
        },
        [handleRefetch],
    );

    const handleSetOrder = useCallback(
        (value: Order) => {
            setOrder(value);
            refetch();
        },
        [refetch],
    );

    return {
        order: {
            value: order,
            onChange: handleSetOrder,
        },
        search: {
            value: search,
            onChangeValue: handleSetSearch,
        },
    };
}
