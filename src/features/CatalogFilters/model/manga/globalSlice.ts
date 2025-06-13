import { ageRateSliceInitialState } from '../slices/ageRate/ageRateSlice';
import { bookmarksSliceInitialState } from '../slices/bookmarks/bookmarksSlice';
import { chapterCountSliceInitialState } from '../slices/chapterCount/chapterCountSlice';
import { genresSliceInitialState } from '../slices/genres/genresSlice';
import { mangaTypeSliceInitialState } from '../slices/mangaType/mangaTypeSlice';
import { orderSliceInitialState } from '../slices/order/orderSlice';
import { rateSliceInitialState } from '../slices/rate/rateSlice';
import { rateCountSliceInitialState } from '../slices/rateCount/rateCountSlice';
import { releaseDateSliceInitialState } from '../slices/releaseDate/releaseDateSlice';
import { searchSliceInitialState } from '../slices/search/searchSlice';
import { sortBySliceInitialState } from '../slices/sortBy/sortBySlice';
import { statusSliceInitialState } from '../slices/status/statusSlice';
import { tagsSliceInitialState } from '../slices/tags/tagsSlice';
import { CatalogFilterInitialState, CatalogFilterSlice, GlobalSlice } from '../types';
import { MangaCatalogFiltersStoreType } from './mangaCatalogFiltersStore';
import { MangaCatalogFiltersType } from './useApplyMangaFilters';

type InitialStateType = CatalogFilterInitialState<MangaCatalogFiltersStoreType>;

const initialState: InitialStateType = {
    ...genresSliceInitialState,
    ...tagsSliceInitialState,
    ...statusSliceInitialState,
    ...mangaTypeSliceInitialState,
    ...ageRateSliceInitialState,
    ...bookmarksSliceInitialState,
    ...chapterCountSliceInitialState,
    ...rateCountSliceInitialState,
    ...rateSliceInitialState,
    ...releaseDateSliceInitialState,
    ...searchSliceInitialState,
    ...sortBySliceInitialState,
    ...orderSliceInitialState,
    appliedFilters: {},
};

export type MangaGlobalSlice = GlobalSlice<MangaCatalogFiltersType>;

export const createGlobalSlice: CatalogFilterSlice<
    MangaGlobalSlice,
    MangaCatalogFiltersStoreType
> = (storeName) => (set, get) => ({
    resetAll: () => set(() => initialState, false, `${storeName}/resetAll`),
    getFilters: () => get(),
    setInitialState: (init: InitialStateType) =>
        set(() => init, false, `${storeName}/setInitialState`),
    appliedFilters: {},
    setAppliedFilters: (appliedFilters) =>
        set(() => ({ appliedFilters }), false, `${storeName}/setAppliedFilters`),
});
