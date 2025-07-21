import { useMemo } from 'react';
import { CheckboxType } from '../../../ui/filters-build-blocks/CheckboxGroup';
import { CatalogFilterSliceSelector } from '../../helpers/types';
import { AgeRatingSlice } from './ageRatingSlice';
import { AgeRating } from '@/shared/kernel/book/ageRating';

export function useAgeRating(slice: CatalogFilterSliceSelector<AgeRatingSlice>) {
    const ageRating = slice.ageRating();
    const setAgeRating = slice.setAgeRating();

    const checkboxes: CheckboxType<AgeRating>[] = useMemo(() => {
        return Object.values(AgeRating).map((ageRate) => ({
            value: ageRate,
            label: ageRate + '+',
        }));
    }, []);

    return {
        values: ageRating,
        onValuesChange: setAgeRating,
        checkboxes,
    };
}
