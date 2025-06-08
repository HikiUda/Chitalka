import { useCallback } from 'react';
import { useCatalogFiltersStore } from '../../store/catalogFiltersStore';
import { useUrlSearchParams } from '@/shared/lib/hooks/useUrlSearchParams';

export function useRate() {
    const { setSearchParam } = useUrlSearchParams();
    const rateFrom = useCatalogFiltersStore.use.rateFrom();
    const setRateFrom = useCatalogFiltersStore.use.setRateFrom();
    const rateTo = useCatalogFiltersStore.use.rateTo();
    const setRateTo = useCatalogFiltersStore.use.setRateTo();

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
