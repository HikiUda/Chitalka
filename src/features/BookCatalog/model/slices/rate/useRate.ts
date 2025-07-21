import { CatalogFilterSliceSelector } from '../../helpers/types';
import { RateSlice } from './rateSlice';

export function useRate(slice: CatalogFilterSliceSelector<RateSlice>) {
    const rateFrom = slice.rateFrom();
    const setRateFrom = slice.setRateFrom();
    const rateTo = slice.rateTo();
    const setRateTo = slice.setRateTo();

    return {
        from: rateFrom,
        to: rateTo,
        setFrom: setRateFrom,
        setTo: setRateTo,
    };
}
