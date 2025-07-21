import { CatalogFilterInitialState, CatalogFilterSlice } from '../../helpers/types';

export type ReleaseDateSlice = {
    releaseDateFrom: string;
    releaseDateTo: string;
    setReleaseDateFrom: (releaseDateFrom: string) => void;
    setReleaseDateTo: (releaseDateTo: string) => void;
};

export const releaseDateSliceInitialState: CatalogFilterInitialState<ReleaseDateSlice> = {
    releaseDateFrom: '',
    releaseDateTo: '',
};

export const createReleaseDateSlice: CatalogFilterSlice<ReleaseDateSlice> =
    (storeName) => (set) => ({
        ...releaseDateSliceInitialState,
        setReleaseDateFrom: (releaseDateFrom) =>
            set(
                () => ({
                    releaseDateFrom,
                }),
                false,
                `${storeName}/setReleaseDateFrom`,
            ),
        setReleaseDateTo: (releaseDateTo) =>
            set(
                () => ({
                    releaseDateTo,
                }),
                false,
                `${storeName}/setReleaseDateTo`,
            ),
    });
