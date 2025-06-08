import { StateCreator } from 'zustand';
import { CatalogFiltersStoreType } from '../catalogFiltersStroe.type';

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
            () => ({
                ageRateFrom,
            }),
            false,
            'CatalogFiltersStore/setAgeRateFrom',
        ),
    setAgeRateTo: (ageRateTo) =>
        set(
            () => ({
                ageRateTo,
            }),
            false,
            'CatalogFiltersStore/setAgeRateTo',
        ),
});
