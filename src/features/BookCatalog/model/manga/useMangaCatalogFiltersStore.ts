import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

import { AgeRatingSlice, createAgeRatingSlice } from '../slices/ageRating/ageRatingSlice';
import { BookLangSlice, createBookLangSlice } from '../slices/bookLang/bookLangSlice';
import { BookmarksSlice, createBookmarksSlice } from '../slices/bookmarks/bookmarksSlice';
import {
    ChapterCountSlice,
    createChapterCountSlice,
} from '../slices/chapterCount/chapterCountSlice';
import { GenresSlice, createGenresSlice } from '../slices/genres/genresSlice';
import { MangaTypeSlice, createMangaTypeSlice } from '../slices/mangaType/mangaTypeSlice';
import { OrderSlice, createOrderSlice } from '../slices/order/orderSlice';
import { RateCountSlice, createRateCountSlice } from '../slices/rateCount/rateCountSlice';
import { RateSlice, createRateSlice } from '../slices/rate/rateSlice';
import { ReleaseDateSlice, createReleaseDateSlice } from '../slices/releaseDate/releaseDateSlice';
import { SearchSlice, createSearchSlice } from '../slices/search/searchSlice';
import { SortBySlice, createSortBySlice } from '../slices/sortBy/sortBySlice';
import { StatusSlice, createStatusSlice } from '../slices/status/statusSlice';
import { TagsSlice, createTagsSlice } from '../slices/tags/tagsSlice';

import { MangaGlobalSlice, createGlobalSlice } from './globalSlice';
import { createZustandStoreSelectors } from '@/shared/lib/helpers/createZustandStoreSelectors';

export type MangaCatalogFiltersStoreType = AgeRatingSlice &
    BookLangSlice &
    BookmarksSlice &
    ChapterCountSlice &
    GenresSlice &
    MangaGlobalSlice &
    MangaTypeSlice &
    OrderSlice &
    RateCountSlice &
    RateSlice &
    ReleaseDateSlice &
    SearchSlice &
    SortBySlice &
    StatusSlice &
    TagsSlice;

const StoreName = 'MangaCatalogFilters';

const useMangaCatalogFiltersStoreBase = create<MangaCatalogFiltersStoreType>()(
    devtools(
        (...a) => ({
            ...createAgeRatingSlice(StoreName)(...a),
            ...createBookLangSlice(StoreName)(...a),
            ...createBookmarksSlice(StoreName)(...a),
            ...createChapterCountSlice(StoreName)(...a),
            ...createGenresSlice(StoreName)(...a),
            ...createGlobalSlice(StoreName)(...a),
            ...createMangaTypeSlice(StoreName)(...a),
            ...createOrderSlice(StoreName)(...a),
            ...createRateCountSlice(StoreName)(...a),
            ...createRateSlice(StoreName)(...a),
            ...createReleaseDateSlice(StoreName)(...a),
            ...createSearchSlice(StoreName)(...a),
            ...createSortBySlice(StoreName)(...a),
            ...createStatusSlice(StoreName)(...a),
            ...createTagsSlice(StoreName)(...a),
        }),
        { name: StoreName },
    ),
);

export const useMangaCatalogFiltersStore = createZustandStoreSelectors(
    useMangaCatalogFiltersStoreBase,
);
