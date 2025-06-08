import { StateCreator } from 'zustand';
import { CatalogFiltersStoreType } from '../catalogFiltersStroe.type';
import { fromNoBiggerTo } from '../../helpers/fromNoBiggerTo';
import { toNoLessFrom } from '../../helpers/toNoLessFrom';

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
            (state) => ({
                rateCountFrom: fromNoBiggerTo(rateCountFrom, state.rateCountTo),
            }),
            false,
            'CatalogFiltersStore/setRateCountFrom',
        ),
    setRateCountTo: (rateCountTo) =>
        set(
            (state) => ({
                rateCountTo: toNoLessFrom(state.rateCountFrom, rateCountTo),
            }),
            false,
            'CatalogFiltersStore/setRateCountTo',
        ),
});
