import { StateCreator } from 'zustand';
import { CatalogFiltersStoreType } from '../catalogFiltersStroe.type';
import { ageRateSliceInitialState } from './ageRateSlice';
import { bookmarksSliceInitialState } from './bookmarksSlice';
import { chapterCountSliceInitialState } from './chapterCountSlice';
import { genresSliceInitialState } from './genresSlice';
import { tagsSliceInitialState } from './tagsSlice';
import { mangaStatusSliceInitialState } from './mangaStatusSlice';
import { mangaTypeSliceInitialState } from './mangaTypeSlice';
import { rateCountSliceInitialState } from './rateCountSlice';
import { rateSliceInitialState } from './rateSlice';
import { releaseDateSliceInitialState } from './releaseDateSlice';

const initialState = {
    ...genresSliceInitialState,
    ...tagsSliceInitialState,
    ...mangaStatusSliceInitialState,
    ...mangaTypeSliceInitialState,
    ...ageRateSliceInitialState,
    ...bookmarksSliceInitialState,
    ...chapterCountSliceInitialState,
    ...rateCountSliceInitialState,
    ...rateSliceInitialState,
    ...releaseDateSliceInitialState,
};

export interface GlobalSlice {
    resetAll: () => void;
    getFilters: () => object;
    setInitialState: (init: object) => void;
}

export const createGlobalSlice: StateCreator<
    CatalogFiltersStoreType,
    [['zustand/devtools', never]],
    [],
    GlobalSlice
> = (set, get) => ({
    resetAll: () => set(() => initialState, false, 'CatalogFiltersStore/resetAll'),
    getFilters: () => ({
        ...get(),
        releaseDateFrom: get().releaseDateFrom?.toString(),
        releaseDateTo: get().releaseDateTo?.toString(),
    }),
    setInitialState: (init) => set(() => init, false, 'CatalogFiltersStore/setInitialState'),
});
