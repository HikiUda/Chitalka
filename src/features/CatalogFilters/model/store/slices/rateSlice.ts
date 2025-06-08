import { StateCreator } from 'zustand';
import { CatalogFiltersStoreType } from '../catalogFiltersStroe.type';

export interface RateSlice {
    rateFrom: number;
    rateTo: number;
    setRateFrom: (rateFrom: number) => void;
    setRateTo: (rateTo: number) => void;
}

export const rateSliceInitialState: Pick<RateSlice, 'rateFrom' | 'rateTo'> = {
    rateFrom: NaN,
    rateTo: NaN,
};

export const createRateSlice: StateCreator<
    CatalogFiltersStoreType,
    [['zustand/devtools', never]],
    [],
    RateSlice
> = (set) => ({
    ...rateSliceInitialState,
    setRateFrom: (rateFrom) =>
        set(
            () => ({
                rateFrom,
            }),
            false,
            'CatalogFiltersStore/setRateFrom',
        ),
    setRateTo: (rateTo) =>
        set(
            () => ({
                rateTo,
            }),
            false,
            'CatalogFiltersStore/setRateTo',
        ),
});
