import { FC } from 'react';
import { FromToNumberField } from '@packages/ui/src/shared/NumberField';
import { useUrlSearchParams } from '@packages/model/src/lib/hooks/useUrlSearchParams';
import { RangeWrapper } from '../RangeWrapper/RangeWrapper';
import { useCatalogFiltersStore } from '../../../model/store/catalogFiltersStore';
import { fromNoBiggerTo } from '../../../model/helpers/fromNoBiggerTo';
import { toNoLessFrom } from '../../../model/helpers/toNoLessFrom';

interface AgeRageRangeProps {
    className?: string;
}

export const AgeRateRange: FC<AgeRageRangeProps> = (props) => {
    const { className } = props;
    const { setSearchParam } = useUrlSearchParams();
    const ageRateFrom = useCatalogFiltersStore.use.ageRateFrom();
    const setAgeRateFrom = useCatalogFiltersStore.use.setAgeRateFrom();
    const ageRateTo = useCatalogFiltersStore.use.ageRateTo();
    const setAgeRateTo = useCatalogFiltersStore.use.setAgeRateTo();

    const handleSetAgeRateFrom = (age: number) => {
        setAgeRateFrom(age);
        setSearchParam('ageRateFrom', String(fromNoBiggerTo(age, ageRateTo)));
    };
    const handleSetAgeRateTo = (age: number) => {
        setAgeRateTo(age);
        setSearchParam('ageRateTo', String(toNoLessFrom(ageRateFrom, age)));
    };

    return (
        <RangeWrapper className={className} title="Возростной рейтинг">
            <FromToNumberField
                fromValue={ageRateFrom}
                toValue={ageRateTo}
                setFromValue={handleSetAgeRateFrom}
                setToValue={handleSetAgeRateTo}
                minValue={0}
                aria-label="ageRate"
            />
        </RangeWrapper>
    );
};
