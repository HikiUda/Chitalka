import { Link } from 'react-router-dom';
import { MapIcon } from 'lucide-react';
import { BookSubMenu } from './BookSubMenu';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from '@/shared/ui/kit/dropdown-menu';
import { getRoute } from '@/shared/kernel/router';
import { Button } from '@/shared/ui/kit/button';
import { cn } from '@/shared/lib/css';

type GlobalNavigationProps = {
    className?: string;
    iconOnly?: boolean;
};

export const GlobalNavigation = (props: GlobalNavigationProps) => {
    const { className, iconOnly } = props;

    const trigger = iconOnly ? (
        <MapIcon size={30} className={cn('stroke-primary', className)} />
    ) : (
        <Button
            className={cn('hover:bg-primary/50 transition-colors duration-300', className)}
            variant="clear"
            size="sm"
        >
            <MapIcon />
            Навигация
        </Button>
    );

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild={!iconOnly}>{trigger}</DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuItem asChild>
                    <Link to={getRoute.MAIN()}>Главная</Link>
                </DropdownMenuItem>
                <BookSubMenu
                    title="Манга"
                    sectionLink={getRoute.MANGA_SECTION()}
                    catalogLink={getRoute.MANGA_CATALOG()}
                    collectionLink={getRoute.COLLECTIONS()}
                />
                <BookSubMenu
                    title="Ранобе"
                    sectionLink={getRoute.RANOBE_SECTION()}
                    catalogLink={getRoute.RANOBE_CATALOG()}
                    collectionLink={getRoute.COLLECTIONS()}
                />
                <DropdownMenuItem asChild>
                    <Link to={getRoute.COLLECTIONS()}>Коллекции</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                    <Link to={getRoute.PEOPLE()}>Люди</Link>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
};
