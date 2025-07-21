import { useCallback } from 'react';
import { useDebounce } from '@/shared/lib/hooks/useDebounce';

export type Order = 'asc' | 'desc';

type UseOrderSearchBookChaptersProps = {
    refetch: () => void;
    search: string;
    order: Order;
    setSearch: (search: string) => void;
    setOrder: (order: Order) => void;
};

export function useOrderSearchBookChapters(props: UseOrderSearchBookChaptersProps) {
    const { refetch, setSearch, setOrder, order, search } = props;
    const handleRefetch = useDebounce(refetch, 500);

    const handleSetSearch = useCallback(
        (value: string) => {
            setSearch(value);
            handleRefetch();
        },
        [handleRefetch, setSearch],
    );

    const handleSetOrder = useCallback(
        (value: Order) => {
            setOrder(value);
            handleRefetch();
        },
        [handleRefetch, setOrder],
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
