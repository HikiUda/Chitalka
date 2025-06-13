import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { createSearchSlice, SearchSlice } from '../slices/search/searchSlice';
import { AgeRateSlice, createAgeRateSlice } from '../slices/ageRate/ageRateSlice';
import { BookmarksSlice, createBookmarksSlice } from '../slices/bookmarks/bookmarksSlice';
import {
    ChapterCountSlice,
    createChapterCountSlice,
} from '../slices/chapterCount/chapterCountSlice';
import { GenresSlice, createGenresSlice } from '../slices/genres/genresSlice';
import { MangaTypeSlice, createMangaTypeSlice } from '../slices/mangaType/mangaTypeSlice';
import { OrderSlice, createOrderSlice } from '../slices/order/orderSlice';
import { RateSlice, createRateSlice } from '../slices/rate/rateSlice';
import { RateCountSlice, createRateCountSlice } from '../slices/rateCount/rateCountSlice';
import { ReleaseDateSlice, createReleaseDateSlice } from '../slices/releaseDate/releaseDateSlice';
import { TagsSlice, createTagsSlice } from '../slices/tags/tagsSlice';
import { createStatusSlice, StatusSlice } from '../slices/status/statusSlice';
import { createSortBySlice, SortBySlice } from '../slices/sortBy/sortBySlice';
import { createGlobalSlice, MangaGlobalSlice } from './globalSlice';
import { createZustandStoreSelectors } from '@/shared/lib/helpers/createZustandStoreSelectors';

export type MangaCatalogFiltersStoreType = SearchSlice &
    OrderSlice &
    SortBySlice &
    ChapterCountSlice &
    RateCountSlice &
    RateSlice &
    AgeRateSlice &
    ReleaseDateSlice &
    MangaTypeSlice &
    StatusSlice &
    BookmarksSlice &
    GenresSlice &
    TagsSlice &
    MangaGlobalSlice;

const StoreName = 'MangaCatalogFilters';

export const useMangaCatalogFiltersStoreBase = create<MangaCatalogFiltersStoreType>()(
    devtools(
        (...a) => ({
            ...createSearchSlice(StoreName)(...a),
            ...createSortBySlice(StoreName)(...a),
            ...createOrderSlice(StoreName)(...a),
            ...createGenresSlice(StoreName)(...a),
            ...createTagsSlice(StoreName)(...a),
            ...createMangaTypeSlice(StoreName)(...a),
            ...createStatusSlice(StoreName)(...a),
            ...createBookmarksSlice(StoreName)(...a),
            ...createChapterCountSlice(StoreName)(...a),
            ...createRateCountSlice(StoreName)(...a),
            ...createRateSlice(StoreName)(...a),
            ...createAgeRateSlice(StoreName)(...a),
            ...createReleaseDateSlice(StoreName)(...a),
            ...createGlobalSlice(StoreName)(...a),
        }),
        { name: StoreName },
    ),
);

export const useMangaCatalogFiltersStore = createZustandStoreSelectors(
    useMangaCatalogFiltersStoreBase,
);
