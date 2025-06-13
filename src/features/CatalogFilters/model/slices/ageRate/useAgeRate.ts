import { useCallback } from 'react';
import { CatalogFilterSliceSelector } from '../../types';
import { AgeRateSlice } from './ageRateSlice';
import { useUrlSearchParams } from '@/shared/lib/hooks/useUrlSearchParams';

export function useAgeRate(slice: CatalogFilterSliceSelector<AgeRateSlice>) {
    const { setSearchParam } = useUrlSearchParams();
    const ageRateFrom = slice.ageRateFrom();
    const setAgeRateFrom = slice.setAgeRateFrom();
    const ageRateTo = slice.ageRateTo();
    const setAgeRateTo = slice.setAgeRateTo();

    const handleSetAgeRateFrom = useCallback(
        (age: number) => {
            setAgeRateFrom(age);
            setSearchParam('ageRateFrom', String(age));
        },
        [setAgeRateFrom, setSearchParam],
    );

    const handleSetAgeRateTo = useCallback(
        (age: number) => {
            setAgeRateTo(age);
            setSearchParam('ageRateTo', String(age));
        },
        [setAgeRateTo, setSearchParam],
    );

    return {
        from: ageRateFrom,
        to: ageRateTo,
        setFrom: handleSetAgeRateFrom,
        setTo: handleSetAgeRateTo,
    };
}
