import { ReactNode } from 'react';
import { ArrowDownNarrowWideIcon, ArrowDownWideNarrowIcon } from 'lucide-react';
import { SortBy } from '../../../model/slices/sortBy/sortBy';
import { Order } from '../../../model/slices/order/orderSlice';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from '@/shared/ui/kit/dropdown-menu';
import { Button } from '@/shared/ui/kit/button';

type SortByOrderMenuProps = {
    className?: string;
    order: ReactNode;
    sortBy: ReactNode;
    orderValue: Order;
    sortByValue: SortBy;
};

export const SortByOrderMenu = (props: SortByOrderMenuProps) => {
    const { className, sortBy, order, orderValue, sortByValue } = props;

    const OrderArrow = orderValue === 'desc' ? ArrowDownWideNarrowIcon : ArrowDownNarrowWideIcon;

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="outline" size="sm" className={className}>
                    {<OrderArrow />}
                    {sortByValue}
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                {sortBy}
                <DropdownMenuSeparator />
                {order}
            </DropdownMenuContent>
        </DropdownMenu>
    );
};
