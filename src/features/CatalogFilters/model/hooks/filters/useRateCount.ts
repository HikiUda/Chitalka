import { useCallback } from 'react';
import { useCatalogFiltersStore } from '../../store/catalogFiltersStore';
import { useUrlSearchParams } from '@/shared/lib/hooks/useUrlSearchParams';

export function useRateCount() {
    const { setSearchParam } = useUrlSearchParams();
    const rateCountFrom = useCatalogFiltersStore.use.rateCountFrom();
    const setRateCountFrom = useCatalogFiltersStore.use.setRateCountFrom();
    const rateCountTo = useCatalogFiltersStore.use.rateCountTo();
    const setRateCountTo = useCatalogFiltersStore.use.setRateCountTo();

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
