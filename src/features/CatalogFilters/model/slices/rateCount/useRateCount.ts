import { useCallback } from 'react';
import { CatalogFilterSliceSelector } from '../../types';
import { RateCountSlice } from './rateCountSlice';
import { useUrlSearchParams } from '@/shared/lib/hooks/useUrlSearchParams';

export function useRateCount(slice: CatalogFilterSliceSelector<RateCountSlice>) {
    const { setSearchParam } = useUrlSearchParams();
    const rateCountFrom = slice.rateCountFrom();
    const setRateCountFrom = slice.setRateCountFrom();
    const rateCountTo = slice.rateCountTo();
    const setRateCountTo = slice.setRateCountTo();

    const handleSetRateCountFrom = useCallback(
        (rateCount: number) => {
            setRateCountFrom(rateCount);
            setSearchParam('rateCountFrom', String(rateCount));
        },
        [setRateCountFrom, setSearchParam],
    );
    const handleSetRateCountTo = useCallback(
        (rateCount: number) => {
            setRateCountTo(rateCount);
            setSearchParam('rateCountTo', String(rateCount));
        },
        [setRateCountTo, setSearchParam],
    );

    return {
        from: rateCountFrom,
        to: rateCountTo,
        setFrom: handleSetRateCountFrom,
        setTo: handleSetRateCountTo,
    };
}
