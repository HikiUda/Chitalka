import { StateCreator } from 'zustand';
import { CatalogFiltersStoreType } from '../catalogFiltersStroe.type';

export interface RateCountSlice {
    rateCountFrom: number;
    rateCountTo: number;
    setRateCountFrom: (rateCountFrom: number) => void;
    setRateCountTo: (rateCountTo: number) => void;
}

export const rateCountSliceInitialState: Pick<RateCountSlice, 'rateCountFrom' | 'rateCountTo'> = {
    rateCountFrom: NaN,
    rateCountTo: NaN,
};

export const createRateCountSlice: StateCreator<
    CatalogFiltersStoreType,
    [['zustand/devtools', never]],
    [],
    RateCountSlice
> = (set) => ({
    ...rateCountSliceInitialState,
    setRateCountFrom: (rateCountFrom) =>
        set(
            () => ({
                rateCountFrom,
            }),
            false,
            'CatalogFiltersStore/setRateCountFrom',
        ),
    setRateCountTo: (rateCountTo) =>
        set(
            () => ({
                rateCountTo,
            }),
            false,
            'CatalogFiltersStore/setRateCountTo',
        ),
});
