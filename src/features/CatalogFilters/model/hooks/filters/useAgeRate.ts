import { useCallback } from 'react';
import { useCatalogFiltersStore } from '../../store/catalogFiltersStore';
import { useUrlSearchParams } from '@/shared/lib/hooks/useUrlSearchParams';

export function useAgeRate() {
    const { setSearchParam } = useUrlSearchParams();
    const ageRateFrom = useCatalogFiltersStore.use.ageRateFrom();
    const setAgeRateFrom = useCatalogFiltersStore.use.setAgeRateFrom();
    const ageRateTo = useCatalogFiltersStore.use.ageRateTo();
    const setAgeRateTo = useCatalogFiltersStore.use.setAgeRateTo();

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
