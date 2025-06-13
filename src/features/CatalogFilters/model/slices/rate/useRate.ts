import { useCallback } from 'react';
import { CatalogFilterSliceSelector } from '../../types';
import { RateSlice } from './rateSlice';
import { useUrlSearchParams } from '@/shared/lib/hooks/useUrlSearchParams';

export function useRate(slice: CatalogFilterSliceSelector<RateSlice>) {
    const { setSearchParam } = useUrlSearchParams();
    const rateFrom = slice.rateFrom();
    const setRateFrom = slice.setRateFrom();
    const rateTo = slice.rateTo();
    const setRateTo = slice.setRateTo();

    const handleSetRateFrom = useCallback(
        (rate: number) => {
            setRateFrom(rate);
            setSearchParam('rateFrom', String(rate));
        },
        [setRateFrom, setSearchParam],
    );

    const handleSetRateTo = useCallback(
        (rate: number) => {
            setRateTo(rate);
            setSearchParam('rateTo', String(rate));
        },
        [setRateTo, setSearchParam],
    );

    return {
        from: rateFrom,
        to: rateTo,
        setFrom: handleSetRateFrom,
        setTo: handleSetRateTo,
    };
}
