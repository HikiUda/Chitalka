import { FC, ReactNode } from 'react';
import { ArrowDownNarrowWideIcon, ArrowDownWideNarrowIcon } from 'lucide-react';
import { SortByType } from '../../../model/slices/sortBy/sortBy';
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
    orderValue: 'asc' | 'desc';
    sortByValue: SortByType;
};

export const SortByOrderMenu: FC<SortByOrderMenuProps> = (props) => {
    const { className, sortBy, order, orderValue, sortByValue } = props;

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="outline" size="sm" className={className}>
                    {orderValue === 'desc' ? (
                        <ArrowDownWideNarrowIcon />
                    ) : (
                        <ArrowDownNarrowWideIcon />
                    )}
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
