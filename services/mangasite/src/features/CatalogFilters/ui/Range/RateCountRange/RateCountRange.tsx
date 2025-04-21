import { FC } from 'react';
import { FromToNumberField } from '@packages/ui/src/shared/NumberField';
import { useCatalogFiltersStore } from '../../../model/store/catalogFiltersStore';
import { RangeWrapper } from '../RangeWrapper/RangeWrapper';

interface RateCountRangeProps {
    className?: string;
}

export const RateCountRange: FC<RateCountRangeProps> = (props) => {
    const { className } = props;
    const rateCountFrom = useCatalogFiltersStore.use.rateCountFrom();
    const setRateCountFrom = useCatalogFiltersStore.use.setRateCountFrom();
    const rateCountTo = useCatalogFiltersStore.use.rateCountTo();
    const setRateCountTo = useCatalogFiltersStore.use.setRateCountTo();

    return (
        <RangeWrapper className={className} title="Количество оценок">
            <FromToNumberField
                fromValue={rateCountFrom}
                toValue={rateCountTo}
                setFromValue={setRateCountFrom}
                setToValue={setRateCountTo}
                minValue={0}
                aria-label="rateCount"
            />
        </RangeWrapper>
    );
};
