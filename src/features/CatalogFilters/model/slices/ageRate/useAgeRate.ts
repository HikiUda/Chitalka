import { CatalogFilterSliceSelector } from '../../types';
import { AgeRateSlice } from './ageRateSlice';

export function useAgeRate(slice: CatalogFilterSliceSelector<AgeRateSlice>) {
    const ageRateFrom = slice.ageRateFrom();
    const setAgeRateFrom = slice.setAgeRateFrom();
    const ageRateTo = slice.ageRateTo();
    const setAgeRateTo = slice.setAgeRateTo();

    return {
        from: ageRateFrom,
        to: ageRateTo,
        setFrom: setAgeRateFrom,
        setTo: setAgeRateTo,
    };
}
