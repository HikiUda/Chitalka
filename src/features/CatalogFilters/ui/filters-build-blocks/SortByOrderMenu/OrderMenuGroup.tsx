import { OrderType } from '../../../model/slices/order/orderSlice';
import { DropdownMenuRadioGroup, DropdownMenuRadioItem } from '@/shared/ui/kit/dropdown-menu';

interface SortByMenuGroupProps {
    className?: string;
    order: OrderType;
    setOrder: (order: OrderType) => void;
}

export const OrderMenuGroup = (props: SortByMenuGroupProps) => {
    const { className, order, setOrder } = props;

    const handleSetOrder = (val: string) => {
        setOrder(val as OrderType);
    };

    return (
        <DropdownMenuRadioGroup value={order} onValueChange={handleSetOrder} className={className}>
            <DropdownMenuRadioItem value="asc">asc</DropdownMenuRadioItem>
            <DropdownMenuRadioItem value="desc">desc</DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
    );
};
