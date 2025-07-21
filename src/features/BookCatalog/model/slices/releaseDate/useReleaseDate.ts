import { CatalogFilterSliceSelector } from '../../helpers/types';
import { ReleaseDateSlice } from './releaseDateSlice';

export function useReleaseDate(slice: CatalogFilterSliceSelector<ReleaseDateSlice>) {
    const releaseDateFrom = slice.releaseDateFrom();
    const setReleaseDateFrom = slice.setReleaseDateFrom();
    const releaseDateTo = slice.releaseDateTo();
    const setReleaseDateTo = slice.setReleaseDateTo();

    return {
        from: releaseDateFrom,
        to: releaseDateTo,
        setFrom: setReleaseDateFrom,
        setTo: setReleaseDateTo,
    };
}
