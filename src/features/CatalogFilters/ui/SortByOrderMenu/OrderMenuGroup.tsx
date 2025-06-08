import { useCatalogFiltersStore } from '../../model/store/catalogFiltersStore';
import { DropdownMenuRadioGroup, DropdownMenuRadioItem } from '@/shared/ui/kit/dropdown-menu';
import { useUrlSearchParams } from '@/shared/lib/hooks/useUrlSearchParams';

interface SortByMenuGroupProps {
    className?: string;
}

export const OrderMenuGroup = (props: SortByMenuGroupProps) => {
    const { className } = props;

    const { setSearchParam } = useUrlSearchParams();

    const order = useCatalogFiltersStore.use.order();
    const setOrder = useCatalogFiltersStore.use.setOrder();

    const handleSetOrder = (order: string) => {
        setOrder(order as 'asc' | 'desc');
        setSearchParam('order', order);
    };

    return (
        <DropdownMenuRadioGroup value={order} onValueChange={handleSetOrder} className={className}>
            <DropdownMenuRadioItem value="asc">asc</DropdownMenuRadioItem>
            <DropdownMenuRadioItem value="desc">desc</DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
    );
};
