import { FC } from 'react';
import { classNames } from '@packages/model/src/lib/helpers/classNames';
import { NumberField } from '@packages/ui/src/shared/NumberField';
import { Button } from '@packages/ui/src/shared/Button';
import { useCatalogFiltersStore } from '../../model/store/catalogFiltersStore';
import cls from './CatalogFilters.module.scss';

interface CatalogFiltersProps {
    className?: string;
}

const CatalogFilters: FC<CatalogFiltersProps> = (props) => {
    const { className } = props;

    const rateCountFrom = useCatalogFiltersStore.use.rateCountFrom();
    const setRateCountFrom = useCatalogFiltersStore.use.setRateCountFrom();
    const rateCountTo = useCatalogFiltersStore.use.rateCountTo();
    const setRateCountTo = useCatalogFiltersStore.use.setRateCountTo();

    return (
        <div className={classNames(cls.CatalogFilters, {}, [className])}>
            <NumberField
                aria-label="l"
                value={rateCountFrom}
                onChange={setRateCountFrom}
                placeholder="From"
                border="primaryBorder"
                minValue={0}
            />
            <NumberField
                aria-label="l"
                value={rateCountTo}
                onChange={setRateCountTo}
                placeholder="From"
                border="primaryBorder"
                minValue={0}
            />
            <Button onPress={() => console.log(rateCountFrom, rateCountTo)}>log</Button>
        </div>
    );
};
export default CatalogFilters;
