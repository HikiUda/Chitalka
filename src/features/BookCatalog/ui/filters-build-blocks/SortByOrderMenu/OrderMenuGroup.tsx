import { Order } from '../../../model/slices/order/orderSlice';
import { DropdownMenuRadioGroup, DropdownMenuRadioItem } from '@/shared/ui/kit/dropdown-menu';

type SortByMenuGroupProps = {
    className?: string;
    order: Order;
    setOrder: (order: Order) => void;
    onApply: () => void;
};

export const OrderMenuGroup = (props: SortByMenuGroupProps) => {
    const { className, order, setOrder, onApply } = props;

    const handleSetOrder = (val: string) => {
        setOrder(val as Order);
        onApply();
    };

    return (
        <DropdownMenuRadioGroup value={order} onValueChange={handleSetOrder} className={className}>
            <DropdownMenuRadioItem className="cursor-pointer" value="asc">
                asc
            </DropdownMenuRadioItem>
            <DropdownMenuRadioItem className="cursor-pointer" value="desc">
                desc
            </DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
    );
};
