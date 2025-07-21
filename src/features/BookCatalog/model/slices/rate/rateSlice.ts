import { CatalogFilterInitialState, CatalogFilterSlice } from '../../helpers/types';

export type RateSlice = {
    rateFrom: number;
    rateTo: number;
    setRateFrom: (rateFrom: number) => void;
    setRateTo: (rateTo: number) => void;
};

export const rateSliceInitialState: CatalogFilterInitialState<RateSlice> = {
    rateFrom: NaN,
    rateTo: NaN,
};

export const createRateSlice: CatalogFilterSlice<RateSlice> = (storeName) => (set) => ({
    ...rateSliceInitialState,
    setRateFrom: (rateFrom) =>
        set(
            () => ({
                rateFrom,
            }),
            false,
            `${storeName}/setRateFrom`,
        ),
    setRateTo: (rateTo) =>
        set(
            () => ({
                rateTo,
            }),
            false,
            `${storeName}/setRateTo`,
        ),
});
