import { FC } from 'react';
import { useCatalogFiltersStore } from '../../model/store/catalogFiltersStore';
import cls from './SortByOrderMenu.module.scss';
import { Menu, MenuItem, MenuSection, MenuSeparator } from '@/shared/deprecate-ui/Menu';
import { Button } from '@/shared/deprecate-ui/Button';
import SortBySvg from '@/shared/assets/icon/common/sortBy.svg?react';
import { Icon } from '@/shared/deprecate-ui/Icon';
import { classNames } from '@/shared/lib/helpers/classNames';
import { useUrlSearchParams } from '@/shared/lib/hooks/useUrlSearchParams';
import { getFlex } from '@/shared/deprecate-ui/Stack';
import { OrderType } from '@/shared/kernel/order';
import { SortByConst, SortByType } from '@/shared/api/deprecated/mangaList';

interface SortByOrderMenuProps {
    className?: string;
    onApply?: () => void;
}

export const SortByOrderMenu: FC<SortByOrderMenuProps> = (props) => {
    const { className, onApply } = props;

    const { setSearchParam } = useUrlSearchParams();

    const sortBy = useCatalogFiltersStore.use.sortBy();
    const setSortBy = useCatalogFiltersStore.use.setSortBy();
    const order = useCatalogFiltersStore.use.order();
    const setOrder = useCatalogFiltersStore.use.setOrder();

    const handleSetSortBy = (sort: SortByType) => {
        setSortBy(sort);
        setSearchParam('sortBy', sort);
        onApply?.();
    };
    const handleSetOrder = (order: OrderType) => {
        setOrder(order);
        setSearchParam('order', order);
        onApply?.();
    };

    return (
        <Menu
            button={
                <Button
                    theme="outline"
                    className={classNames(cls.button, {}, [getFlex({ gap: '4' })])}
                    data-testid="SortByOrder-Button"
                >
                    <Icon Svg={SortBySvg} size={12} />
                    {sortBy}
                </Button>
            }
            className={className}
        >
            <MenuSection>
                {Object.values(SortByConst).map((sort) => (
                    <MenuItem
                        className={classNames(cls.menuItem, {
                            [cls.selectedItem]: sort === sortBy,
                        })}
                        onAction={() => handleSetSortBy(sort)}
                        key={sort}
                        id={sort}
                    >
                        {sort}
                    </MenuItem>
                ))}
            </MenuSection>
            <MenuSeparator />
            <MenuSection>
                <MenuItem
                    className={classNames(cls.menuItem, {
                        [cls.selectedItem]: order === 'desc',
                    })}
                    key={'desc'}
                    id={'desc'}
                    onAction={() => handleSetOrder('desc')}
                >
                    {'desc'}
                </MenuItem>
                <MenuItem
                    className={classNames(cls.menuItem, {
                        [cls.selectedItem]: order === 'asc',
                    })}
                    key={'asc'}
                    id={'asc'}
                    onAction={() => handleSetOrder('asc')}
                >
                    {'asc'}
                </MenuItem>
            </MenuSection>
        </Menu>
    );
};
