import { useMangaCatalogFiltersStore } from '../../model/manga/useMangaCatalogFiltersStore';
import { useMangaCatalogApplyFilters } from '../../model/manga/useMangaCatalogApplyFilters';
import { useOrder } from '../../model/slices/order/useOrder';
import { useSortBy } from '../../model/slices/sortBy/useSortBy';
import { OrderMenuGroup } from '../filters-build-blocks/SortByOrderMenu/OrderMenuGroup';
import { SortByMenuGroup } from '../filters-build-blocks/SortByOrderMenu/SortByMenuGroup';
import { SortByOrderMenu } from '../filters-build-blocks/SortByOrderMenu/SortByOrderMenu';

type MangaCatalogSortByOrderProps = {
    className?: string;
};

export const MangaCatalogSortByOrder = (props: MangaCatalogSortByOrderProps) => {
    const { className } = props;

    const { applyFilters } = useMangaCatalogApplyFilters();
    const store = useMangaCatalogFiltersStore.use;
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
