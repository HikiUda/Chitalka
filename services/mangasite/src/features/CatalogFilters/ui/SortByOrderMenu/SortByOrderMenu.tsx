import { FC } from 'react';
import { Menu, MenuItem, MenuSection, MenuSeparator } from '@packages/ui/src/shared/Menu';
import { Button } from '@packages/ui/src/shared/Button';
import SortBySvg from '@packages/ui/src/assets/icon/common/sortBy.svg';
import { Icon } from '@packages/ui/src/shared/Icon';
import { classNames } from '@packages/model/src/lib/helpers/classNames';
import { useUrlSearchParams } from '@packages/model/src/lib/hooks/useUrlSearchParams';
import { getFlex } from '@packages/ui/src/shared/Stack';
import { useCatalogFiltersStore } from '../../model/store/catalogFiltersStore';
import cls from './SortByOrderMenu.module.scss';
import { OrderType, SortByConst, SortByType } from '@/shared/api/mangaList';

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
