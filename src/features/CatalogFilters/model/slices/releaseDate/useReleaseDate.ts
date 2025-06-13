import { useCallback } from 'react';
import { CatalogFilterSliceSelector } from '../../types';
import { ReleaseDateSlice } from './releaseDateSlice';
import { useUrlSearchParams } from '@/shared/lib/hooks/useUrlSearchParams';

export function useReleaseDate(slice: CatalogFilterSliceSelector<ReleaseDateSlice>) {
    const { setSearchParam } = useUrlSearchParams();
    const releaseDateFrom = slice.releaseDateFrom();
    const setReleaseDateFrom = slice.setReleaseDateFrom();
    const releaseDateTo = slice.releaseDateTo();
    const setReleaseDateTo = slice.setReleaseDateTo();

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
