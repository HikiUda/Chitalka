import { FC } from 'react';
import { RangeWrapper } from '../RangeWrapper/RangeWrapper';
import { useCatalogFiltersStore } from '../../../model/store/catalogFiltersStore';
import { FromToNumberField } from '@/entities/FromToNumberField';

interface AgeRageRangeProps {
    className?: string;
}

export const AgeRateRange: FC<AgeRageRangeProps> = (props) => {
    const { className } = props;
    const ageRateFrom = useCatalogFiltersStore.use.ageRateFrom();
    const setAgeRateFrom = useCatalogFiltersStore.use.setAgeRateFrom();
    const ageRateTo = useCatalogFiltersStore.use.ageRateTo();
    const setAgeRateTo = useCatalogFiltersStore.use.setAgeRateTo();

    return (
        <RangeWrapper className={className} title="Возростной рейтинг">
            <FromToNumberField
                fromValue={ageRateFrom}
                toValue={ageRateTo}
                setFromValue={setAgeRateFrom}
                setToValue={setAgeRateTo}
                minValue={0}
                aria-label="ageRate"
            />
        </RangeWrapper>
    );
};
