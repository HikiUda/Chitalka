import { Link } from 'react-router-dom';
import { useI18n } from './GlobalNavigation';
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
    const t = useI18n();
    return (
        <DropdownMenuSub>
            <DropdownMenuSubTrigger>{title}</DropdownMenuSubTrigger>
            <DropdownMenuSubContent sideOffset={5} alignOffset={-5}>
                <DropdownMenuItem asChild>
                    <Link to={sectionLink}>{t('main')}</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                    <Link to={catalogLink}>{t('catalog')}</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                    <Link to={collectionLink}>{t('collections')}</Link>
                </DropdownMenuItem>
            </DropdownMenuSubContent>
        </DropdownMenuSub>
    );
};
