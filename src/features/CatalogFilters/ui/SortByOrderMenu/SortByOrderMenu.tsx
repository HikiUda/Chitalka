import { FC, Suspense } from 'react';
import { ArrowDownNarrowWideIcon, ArrowDownWideNarrowIcon } from 'lucide-react';
import { useCatalogFiltersStore } from '../../model/store/catalogFiltersStore';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from '@/shared/ui/kit/dropdown-menu';
import { lazyNamed } from '@/shared/lib/helpers/lazyNamed';
import { Button } from '@/shared/ui/kit/button';
import { Loader } from '@/shared/ui/kit/loader';

const SortByMenuGroup = lazyNamed(() => import('./SortByMenuGroup'), 'SortByMenuGroup');
const OrderMenuGroup = lazyNamed(() => import('./OrderMenuGroup'), 'OrderMenuGroup');

interface SortByOrderMenuProps {
    className?: string;
}

export const SortByOrderMenu: FC<SortByOrderMenuProps> = (props) => {
    const { className } = props;

    const sortBy = useCatalogFiltersStore.use.sortBy();
    const order = useCatalogFiltersStore.use.order();

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="outline" size="sm" className={className}>
                    {order === 'desc' ? <ArrowDownWideNarrowIcon /> : <ArrowDownNarrowWideIcon />}
                    {sortBy}
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="min-h-15">
                <Suspense fallback={<Loader variant="flower" className="mx-auto" />}>
                    <SortByMenuGroup />
                    <DropdownMenuSeparator />
                    <OrderMenuGroup />
                </Suspense>
            </DropdownMenuContent>
        </DropdownMenu>
    );
};
