import { useRanobeCatalogFiltersStore } from '../../model/ranobe/useRanobeCatalogFiltersStore';
import { useRanobeCatalogApplyFilters } from '../../model/ranobe/useRanobeCatalogApplyFilters';
import { useOrder } from '../../model/slices/order/useOrder';
import { useSortBy } from '../../model/slices/sortBy/useSortBy';
import { OrderMenuGroup } from '../filters-build-blocks/SortByOrderMenu/OrderMenuGroup';
import { SortByMenuGroup } from '../filters-build-blocks/SortByOrderMenu/SortByMenuGroup';
import { SortByOrderMenu } from '../filters-build-blocks/SortByOrderMenu/SortByOrderMenu';

type RanobeCatalogSortByOrderProps = {
    className?: string;
};

export const RanobeCatalogSortByOrder = (props: RanobeCatalogSortByOrderProps) => {
    const { className } = props;

    const { applyFilters } = useRanobeCatalogApplyFilters();
    const store = useRanobeCatalogFiltersStore.use;
    const order = useOrder(store);
    const sortBy = useSortBy(store);

    return (
        <SortByOrderMenu
            className={className}
            orderValue={order.order}
            sortByValue={sortBy.sortBy}
            sortBy={<SortByMenuGroup {...sortBy} onApply={applyFilters} />}
            order={<OrderMenuGroup {...order} onApply={applyFilters} />}
        />
    );
};
