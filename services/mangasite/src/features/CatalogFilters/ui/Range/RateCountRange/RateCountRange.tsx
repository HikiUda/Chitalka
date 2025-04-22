import { FC } from 'react';
import { FromToNumberField } from '@packages/ui/src/shared/NumberField';
import { useUrlSearchParams } from '@packages/model/src/lib/hooks/useUrlSearchParams';
import { useCatalogFiltersStore } from '../../../model/store/catalogFiltersStore';
import { RangeWrapper } from '../RangeWrapper/RangeWrapper';
import { fromNoBiggerTo } from '../../../model/helpers/fromNoBiggerTo';
import { toNoLessFrom } from '../../../model/helpers/toNoLessFrom';

interface RateCountRangeProps {
    className?: string;
}

export const RateCountRange: FC<RateCountRangeProps> = (props) => {
    const { className } = props;
    const { setSearchParam } = useUrlSearchParams();
    const rateCountFrom = useCatalogFiltersStore.use.rateCountFrom();
    const setRateCountFrom = useCatalogFiltersStore.use.setRateCountFrom();
    const rateCountTo = useCatalogFiltersStore.use.rateCountTo();
    const setRateCountTo = useCatalogFiltersStore.use.setRateCountTo();

    const handleSetRateCountFrom = (rateCount: number) => {
        setRateCountFrom(rateCount);
        setSearchParam('rateCountFrom', String(fromNoBiggerTo(rateCount, rateCountTo)));
    };
    const handleSetRateCountTo = (rateCount: number) => {
        setRateCountTo(rateCount);
        setSearchParam('rateCountTo', String(toNoLessFrom(rateCountFrom, rateCount)));
    };

    return (
        <RangeWrapper className={className} title="Количество оценок">
            <FromToNumberField
                fromValue={rateCountFrom}
                toValue={rateCountTo}
                setFromValue={handleSetRateCountFrom}
                setToValue={handleSetRateCountTo}
                minValue={0}
                aria-label="rateCount"
            />
        </RangeWrapper>
    );
};
