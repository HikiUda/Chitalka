import { ageRatingSliceInitialState } from '../slices/ageRating/ageRatingSlice';
import { bookLangSliceInitialState } from '../slices/bookLang/bookLangSlice';
import { bookmarksSliceInitialState } from '../slices/bookmarks/bookmarksSlice';
import { chapterCountSliceInitialState } from '../slices/chapterCount/chapterCountSlice';
import { genresSliceInitialState } from '../slices/genres/genresSlice';
import { ranobeTypeSliceInitialState } from '../slices/ranobeType/ranobeTypeSlice';
import { orderSliceInitialState } from '../slices/order/orderSlice';
import { rateCountSliceInitialState } from '../slices/rateCount/rateCountSlice';
import { rateSliceInitialState } from '../slices/rate/rateSlice';
import { releaseDateSliceInitialState } from '../slices/releaseDate/releaseDateSlice';
import { searchSliceInitialState } from '../slices/search/searchSlice';
import { sortBySliceInitialState } from '../slices/sortBy/sortBySlice';
import { statusSliceInitialState } from '../slices/status/statusSlice';
import { tagsSliceInitialState } from '../slices/tags/tagsSlice';

import { CatalogFilterInitialState, CatalogFilterSlice, GlobalSlice } from '../helpers/types';
import { RanobeCatalogFiltersStoreType } from './useRanobeCatalogFiltersStore';
import { RanobeCatalogFilters } from './useRanobeCatalogApplyFilters';

type InitialStateType = CatalogFilterInitialState<RanobeCatalogFiltersStoreType>;

const initialState: InitialStateType = {
    ...ageRatingSliceInitialState,
    ...bookLangSliceInitialState,
    ...bookmarksSliceInitialState,
    ...chapterCountSliceInitialState,
    ...genresSliceInitialState,
    ...ranobeTypeSliceInitialState,
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

export type RanobeGlobalSlice = GlobalSlice<RanobeCatalogFilters>;

export const createGlobalSlice: CatalogFilterSlice<
    RanobeGlobalSlice,
    RanobeCatalogFiltersStoreType
> = (storeName) => (set, get) => ({
    resetAll: (init: Partial<InitialStateType> = {}) =>
        set(() => ({ ...initialState, ...init }), false, `${storeName}/resetAll`),
    getFilters: () => get(),
    appliedFilters: {},
    setAppliedFilters: (appliedFilters) =>
        set(() => ({ appliedFilters }), false, `${storeName}/setAppliedFilters`),
});
