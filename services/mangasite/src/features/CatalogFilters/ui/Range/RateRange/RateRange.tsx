import { FC } from 'react';
import { FromToNumberField } from '@packages/ui/src/shared/NumberField';
import { useUrlSearchParams } from '@packages/model/src/lib/hooks/useUrlSearchParams';
import { useCatalogFiltersStore } from '../../../model/store/catalogFiltersStore';
import { RangeWrapper } from '../RangeWrapper/RangeWrapper';
import { fromNoBiggerTo } from '../../../model/helpers/fromNoBiggerTo';
import { toNoLessFrom } from '../../../model/helpers/toNoLessFrom';

interface RateRangeProps {
    className?: string;
}

export const RateRange: FC<RateRangeProps> = (props) => {
    const { className } = props;

    const { setSearchParam } = useUrlSearchParams();
    const rateFrom = useCatalogFiltersStore.use.rateFrom();
    const setRateFrom = useCatalogFiltersStore.use.setRateFrom();
    const rateTo = useCatalogFiltersStore.use.rateTo();
    const setRateTo = useCatalogFiltersStore.use.setRateTo();

    const handleSetRateFrom = (rate: number) => {
        setRateFrom(rate);
        setSearchParam('rateFrom', String(fromNoBiggerTo(rate, rateTo)));
    };
    const handleSetRateTo = (rate: number) => {
        setRateTo(rate);
        setSearchParam('rateTo', String(toNoLessFrom(rateFrom, rate)));
    };

    return (
        <RangeWrapper className={className} title="Оценка">
            <FromToNumberField
                fromValue={rateFrom}
                toValue={rateTo}
                setFromValue={handleSetRateFrom}
                setToValue={handleSetRateTo}
                minValue={0}
                maxValue={10}
                aria-label="rate"
            />
        </RangeWrapper>
    );
};
