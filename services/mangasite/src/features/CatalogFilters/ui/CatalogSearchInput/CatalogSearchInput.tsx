import { FC } from 'react';
import { classNames } from '@packages/model/src/lib/helpers/classNames';
import { Input } from '@packages/ui/src/shared/Input';
import SearchSvg from '@packages/ui/src/assets/icon/common/search.svg';
import CrossoutSvg from '@packages/ui/src/assets/icon/common/crossout.svg';
import { Icon } from '@packages/ui/src/shared/Icon';
import { Button } from '@packages/ui/src/shared/Button';
import { useUrlSearchParams } from '@packages/model/src/lib/hooks/useUrlSearchParams';
import { useCatalogFiltersStore } from '../../model/store/catalogFiltersStore';
import cls from './CatalogSearchInput.module.scss';

interface CatalogSearchInputProps {
    className?: string;
}

export const CatalogSearchInput: FC<CatalogSearchInputProps> = (props) => {
    const { className } = props;

    const { setSearchParam } = useUrlSearchParams();

    const search = useCatalogFiltersStore.use.search();
    const setSeacrh = useCatalogFiltersStore.use.setSearch();

    const handleSetSearch = (q: string) => {
        setSeacrh(q);
        setSearchParam('search', q);
    };

    return (
        <div className={classNames(cls.CatalogSearchInput, {}, [className])}>
            <Icon className={cls.search} Svg={SearchSvg} size={20} />
            <Input
                value={search}
                onChange={handleSetSearch}
                border="primaryBorder"
                placeholder="Поиск"
                maxWidth
                className={cls.input}
            />
            <Button onPress={() => setSeacrh('')} theme="clear" noHover className={cls.crossout}>
                <Icon Svg={CrossoutSvg} size={15} />
            </Button>
        </div>
    );
};
