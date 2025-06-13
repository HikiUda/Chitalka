import { CatalogFilterInitialState, CatalogFilterSlice } from '../../types';

export type AgeRateSlice = {
    ageRateFrom: number;
    ageRateTo: number;
    setAgeRateFrom: (ageRateFrom: number) => void;
    setAgeRateTo: (ageRateTo: number) => void;
};

export const ageRateSliceInitialState: CatalogFilterInitialState<AgeRateSlice> = {
    ageRateFrom: NaN,
    ageRateTo: NaN,
};

export const createAgeRateSlice: CatalogFilterSlice<AgeRateSlice> = (storeName) => (set) => ({
    ...ageRateSliceInitialState,
    setAgeRateFrom: (ageRateFrom) =>
        set(
            () => ({
                ageRateFrom,
            }),
            false,
            `${storeName}/setAgeRateFrom`,
        ),
    setAgeRateTo: (ageRateTo) =>
        set(
            () => ({
                ageRateTo,
            }),
            false,
            `${storeName}/setAgeRateTo`,
        ),
});
