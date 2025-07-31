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
import { createI18nModule } from '@/shared/kernel/i18n';

type GlobalNavigationProps = {
    className?: string;
    iconOnly?: boolean;
};

export const { useI18n } = createI18nModule({
    main: { ru: 'Главная', en: 'Main' },
    navigation: { ru: 'Навигация', en: 'Navigation' },
    collections: { ru: 'Коллекции', en: 'Collections' },
    catalog: { ru: 'Каталог', en: 'Catalog' },
    people: { ru: 'Люди', en: 'People' },
    manga: { ru: 'Манга', en: 'Manga' },
    ranobe: { ru: 'Ранобе', en: 'Ranobe' },
});

export const GlobalNavigation = (props: GlobalNavigationProps) => {
    const { className, iconOnly } = props;
    const t = useI18n();

    const trigger = iconOnly ? (
        <MapIcon size={30} className={cn('stroke-primary', className)} />
    ) : (
        <Button
            className={cn('hover:bg-primary/50 transition-colors duration-300', className)}
            variant="clear"
            size="sm"
        >
            <MapIcon />
            {t('navigation')}
        </Button>
    );

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild={!iconOnly}>{trigger}</DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuItem asChild>
                    <Link to={getRoute.MAIN()}>{t('main')}</Link>
                </DropdownMenuItem>
                <BookSubMenu
                    title={t('manga')}
                    sectionLink={getRoute.MANGA_SECTION()}
                    catalogLink={getRoute.MANGA_CATALOG()}
                    collectionLink={getRoute.COLLECTIONS()}
                />
                <BookSubMenu
                    title={t('ranobe')}
                    sectionLink={getRoute.RANOBE_SECTION()}
                    catalogLink={getRoute.RANOBE_CATALOG()}
                    collectionLink={getRoute.COLLECTIONS()}
                />
                <DropdownMenuItem asChild>
                    <Link to={getRoute.COLLECTIONS()}>{t('collections')}</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                    <Link to={getRoute.PEOPLE()}>{t('people')}</Link>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
};
