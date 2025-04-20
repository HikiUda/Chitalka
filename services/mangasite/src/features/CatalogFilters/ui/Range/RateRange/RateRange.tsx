import { FC } from 'react';
import { useCatalogFiltersStore } from '../../../model/store/catalogFiltersStore';
import { RangeWrapper } from '../RangeWrapper/RangeWrapper';
import { FromToNumberField } from '@/entities/FromToNumberField';

interface RateRangeProps {
    className?: string;
}

export const RateRange: FC<RateRangeProps> = (props) => {
    const { className } = props;
    const rateFrom = useCatalogFiltersStore.use.rateFrom();
    const setRateFrom = useCatalogFiltersStore.use.setRateFrom();
    const rateTo = useCatalogFiltersStore.use.rateTo();
    const setRateTo = useCatalogFiltersStore.use.setRateTo();

    return (
        <RangeWrapper className={className} title="Оценка">
            <FromToNumberField
                fromValue={rateFrom}
                toValue={rateTo}
                setFromValue={setRateFrom}
                setToValue={setRateTo}
                minValue={0}
                maxValue={10}
                aria-label="rate"
            />
        </RangeWrapper>
    );
};
