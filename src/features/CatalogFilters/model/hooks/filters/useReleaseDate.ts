import { useCallback } from 'react';
import { useCatalogFiltersStore } from '../../store/catalogFiltersStore';
import { useUrlSearchParams } from '@/shared/lib/hooks/useUrlSearchParams';

export function useReleaseDate() {
    const { setSearchParam } = useUrlSearchParams();
    const releaseDateFrom = useCatalogFiltersStore.use.releaseDateFrom();
    const setReleaseDateFrom = useCatalogFiltersStore.use.setReleaseDateFrom();
    const releaseDateTo = useCatalogFiltersStore.use.releaseDateTo();
    const setReleaseDateTo = useCatalogFiltersStore.use.setReleaseDateTo();

    const handleSetReleaseDatetFrom = useCallback(
        (releaseDate: string) => {
            setReleaseDateFrom(releaseDate);
            setSearchParam('releaseDateFrom', releaseDate);
        },
        [setReleaseDateFrom, setSearchParam],
    );
    const handleSetReleaseDateTo = useCallback(
        (releaseDate: string) => {
            setReleaseDateTo(releaseDate);
            setSearchParam('releaseDateTo', releaseDate);
        },
        [setReleaseDateTo, setSearchParam],
    );

    return {
        from: releaseDateFrom,
        to: releaseDateTo,
        setFrom: handleSetReleaseDatetFrom,
        setTo: handleSetReleaseDateTo,
    };
}
