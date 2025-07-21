import { CatalogFilterInitialState, CatalogFilterSlice } from '../../helpers/types';

export type RateCountSlice = {
    rateCountFrom: number;
    rateCountTo: number;
    setRateCountFrom: (rateCountFrom: number) => void;
    setRateCountTo: (rateCountTo: number) => void;
};

export const rateCountSliceInitialState: CatalogFilterInitialState<RateCountSlice> = {
    rateCountFrom: NaN,
    rateCountTo: NaN,
};

export const createRateCountSlice: CatalogFilterSlice<RateCountSlice> = (storeName) => (set) => ({
    ...rateCountSliceInitialState,
    setRateCountFrom: (rateCountFrom) =>
        set(
            () => ({
                rateCountFrom,
            }),
            false,
            `${storeName}/setRateCountFrom`,
        ),
    setRateCountTo: (rateCountTo) =>
        set(
            () => ({
                rateCountTo,
            }),
            false,
            `${storeName}/setRateCountTo`,
        ),
});
