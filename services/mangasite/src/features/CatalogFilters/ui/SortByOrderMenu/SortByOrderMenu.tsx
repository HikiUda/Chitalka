import { FC } from 'react';
import { classNames } from '@packages/model/src/lib/helpers/classNames';
import { Menu, MenuItem, MenuSection, Separator } from '@packages/ui/src/shared/Menu';
import { Button } from '@packages/ui/src/shared/Button';
import { useCatalogFiltersStore } from '../../model/store/catalogFiltersStore';
import cls from './SortByOrderMenu.module.scss';
import { OrderType, SortByConst, SortByType } from '@/shared/api/mangaList';

interface SortByOrderMenuProps {
    className?: string;
}

export const SortByOrderMenu: FC<SortByOrderMenuProps> = (props) => {
    const { className } = props;

    const sortBy = useCatalogFiltersStore.use.sortBy();
    const setSortBy = useCatalogFiltersStore.use.setSortBy();
    const order = useCatalogFiltersStore.use.order();
    const setOrder = useCatalogFiltersStore.use.setOrder();

    return (
        <Menu
            button={
                <Button theme="outline" className={cls.button}>
                    {sortBy}
                </Button>
            }
            className={classNames(cls.SortByOrderMenu, {}, [className])}
        >
            <MenuSection
                selectionMode="single"
                selectedKeys={sortBy}
                onSelectionChange={(key) => setSortBy(Array.from(key)[0] as SortByType)}
            >
                {Object.values(SortByConst).map((sort) => (
                    <MenuItem key={sort} id={sort}>
                        {sort}
                    </MenuItem>
                ))}
            </MenuSection>
            <Separator className={cls.separator} />
            <MenuSection
                selectionMode="single"
                selectedKeys={order}
                onSelectionChange={(key) => setOrder(Array.from(key)[0] as OrderType)}
            >
                <MenuItem key={'desc'} id={'desc'}>
                    {'desc'}
                </MenuItem>

                <MenuItem key={'asc'} id={'asc'}>
                    {'asc'}
                </MenuItem>
            </MenuSection>
        </Menu>
    );
};
