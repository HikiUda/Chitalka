import { StateCreator } from 'zustand';
import { CatalogFiltersStoreType } from '../catalogFiltersStroe.type';
import { fromNoBiggerTo } from '../../helpers/fromNoBiggerTo';
import { toNoLessFrom } from '../../helpers/toNoLessFrom';

export interface AgeRateSlice {
    ageRateFrom: number;
    ageRateTo: number;
    setAgeRateFrom: (ageRateFrom: number) => void;
    setAgeRateTo: (ageRateTo: number) => void;
}

export const ageRateSliceInitialState: Pick<AgeRateSlice, 'ageRateFrom' | 'ageRateTo'> = {
    ageRateFrom: NaN,
    ageRateTo: NaN,
};

export const createAgeRateSlice: StateCreator<
    CatalogFiltersStoreType,
    [['zustand/devtools', never]],
    [],
    AgeRateSlice
> = (set) => ({
    ...ageRateSliceInitialState,
    setAgeRateFrom: (ageRateFrom) =>
        set(
            (state) => ({
                ageRateFrom: fromNoBiggerTo(ageRateFrom, state.ageRateTo),
            }),
            false,
            'CatalogFiltersStore/setAgeRateFrom',
        ),
    setAgeRateTo: (ageRateTo) =>
        set(
            (state) => ({
                ageRateTo: toNoLessFrom(state.ageRateFrom, ageRateTo),
            }),
            false,
            'CatalogFiltersStore/setAgeRateTo',
        ),
});
