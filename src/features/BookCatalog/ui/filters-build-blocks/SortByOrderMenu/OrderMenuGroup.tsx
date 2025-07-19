import { OrderType } from '../../../model/slices/order/orderSlice';
import { DropdownMenuRadioGroup, DropdownMenuRadioItem } from '@/shared/ui/kit/dropdown-menu';

type SortByMenuGroupProps = {
    className?: string;
    order: OrderType;
    setOrder: (order: OrderType) => void;
    onApply: () => void;
};

export const OrderMenuGroup = (props: SortByMenuGroupProps) => {
    const { className, order, setOrder, onApply } = props;

    const handleSetOrder = (val: string) => {
        setOrder(val as OrderType);
        onApply();
    };

    return (
        <DropdownMenuRadioGroup value={order} onValueChange={handleSetOrder} className={className}>
            <DropdownMenuRadioItem value="asc">asc</DropdownMenuRadioItem>
            <DropdownMenuRadioItem value="desc">desc</DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
    );
};
