import { StateCreator } from 'zustand';
import { CatalogFiltersStoreType } from '../catalogFiltersStroe.type';
import { fromNoBiggerTo } from '../../helpers/fromNoBiggerTo';
import { toNoLessFrom } from '../../helpers/toNoLessFrom';

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
            (state) => ({
                rateFrom: fromNoBiggerTo(rateFrom, state.rateTo),
            }),
            false,
            'CatalogFiltersStore/setRateFrom',
        ),
    setRateTo: (rateTo) =>
        set(
            (state) => ({
                rateTo: toNoLessFrom(state.rateFrom, rateTo),
            }),
            false,
            'CatalogFiltersStore/setRateTo',
        ),
});
