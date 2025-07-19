import { ageRatingSliceInitialState } from '../slices/ageRating/ageRatingSlice';
import { bookmarksSliceInitialState } from '../slices/bookmarks/bookmarksSlice';
import { chapterCountSliceInitialState } from '../slices/chapterCount/chapterCountSlice';
import { genresSliceInitialState } from '../slices/genres/genresSlice';
import { mangaTypeSliceInitialState } from '../slices/mangaType/mangaTypeSlice';
import { orderSliceInitialState } from '../slices/order/orderSlice';
import { rateCountSliceInitialState } from '../slices/rateCount/rateCountSlice';
import { rateSliceInitialState } from '../slices/rate/rateSlice';
import { releaseDateSliceInitialState } from '../slices/releaseDate/releaseDateSlice';
import { searchSliceInitialState } from '../slices/search/searchSlice';
import { sortBySliceInitialState } from '../slices/sortBy/sortBySlice';
import { statusSliceInitialState } from '../slices/status/statusSlice';
import { tagsSliceInitialState } from '../slices/tags/tagsSlice';

import { CatalogFilterInitialState, CatalogFilterSlice, GlobalSlice } from '../types';
import { MangaCatalogFiltersStoreType } from './mangaCatalogFiltersStore';
import { MangaCatalogFiltersType } from './useApplyMangaCatalogFilters';

type InitialStateType = CatalogFilterInitialState<MangaCatalogFiltersStoreType>;

const initialState: InitialStateType = {
    ...ageRatingSliceInitialState,
    ...bookmarksSliceInitialState,
    ...chapterCountSliceInitialState,
    ...genresSliceInitialState,
    ...mangaTypeSliceInitialState,
    ...orderSliceInitialState,
    ...rateCountSliceInitialState,
    ...rateSliceInitialState,
    ...releaseDateSliceInitialState,
    ...searchSliceInitialState,
    ...sortBySliceInitialState,
    ...statusSliceInitialState,
    ...tagsSliceInitialState,
    appliedFilters: {},
};

export type MangaGlobalSlice = GlobalSlice<MangaCatalogFiltersType>;

export const createGlobalSlice: CatalogFilterSlice<
    MangaGlobalSlice,
    MangaCatalogFiltersStoreType
> = (storeName) => (set, get) => ({
    resetAll: () =>
        set(
            (init: Partial<InitialStateType> = {}) => ({ ...initialState, ...init }),
            false,
            `${storeName}/resetAll`,
        ),
    getFilters: () => get(),
    appliedFilters: {},
    setAppliedFilters: (appliedFilters) =>
        set(() => ({ appliedFilters }), false, `${storeName}/setAppliedFilters`),
});
