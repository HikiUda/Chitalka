import { CatalogFilterSliceSelector } from '../../types';
import { RateCountSlice } from './rateCountSlice';

export function useRateCount(slice: CatalogFilterSliceSelector<RateCountSlice>) {
    const rateCountFrom = slice.rateCountFrom();
    const setRateCountFrom = slice.setRateCountFrom();
    const rateCountTo = slice.rateCountTo();
    const setRateCountTo = slice.setRateCountTo();

    return {
        from: rateCountFrom,
        to: rateCountTo,
        setFrom: setRateCountFrom,
        setTo: setRateCountTo,
    };
}
