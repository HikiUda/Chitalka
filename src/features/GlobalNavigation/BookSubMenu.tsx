import { Link } from 'react-router-dom';
import {
    DropdownMenuItem,
    DropdownMenuSub,
    DropdownMenuSubContent,
    DropdownMenuSubTrigger,
} from '@/shared/ui/kit/dropdown-menu';

type BookSubMenuProps = {
    title: string;
    sectionLink: string;
    catalogLink: string;
    collectionLink: string;
};

export const BookSubMenu = (props: BookSubMenuProps) => {
    const { title, sectionLink, catalogLink, collectionLink } = props;
    return (
        <DropdownMenuSub>
            <DropdownMenuSubTrigger>{title}</DropdownMenuSubTrigger>
            <DropdownMenuSubContent sideOffset={5} alignOffset={-5}>
                <DropdownMenuItem asChild>
                    <Link to={sectionLink}>Главная</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                    <Link to={catalogLink}>Каталог</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                    <Link to={collectionLink}>Коллекции</Link>
                </DropdownMenuItem>
            </DropdownMenuSubContent>
        </DropdownMenuSub>
    );
};
