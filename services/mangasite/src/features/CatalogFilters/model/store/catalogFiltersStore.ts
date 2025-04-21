import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { createSelectorsForVanillaStore } from '@packages/model/src/lib/zustand/createSelectorsForVanillaStore';
import { CatalogFiltersStoreType } from './catalogFiltersStroe.type';
import { createSearchSlice } from './slices/searchSlice';
import { createSortByOrderSlice } from './slices/sortByOrderSlice';
import { createChapterCountSlice } from './slices/chapterCountSlice';
import { createRateCountSlice } from './slices/rateCountSlice';
import { createRateSlice } from './slices/rateSlice';
import { createReleaseDateSlice } from './slices/releaseDateSlice';
import { createMangaTypeSlice } from './slices/mangaTypeSlice';
import { createMangaStatusSlice } from './slices/mangaStatusSlice';
import { createAgeRateSlice } from './slices/ageRateSlice';
import { createBookmarksSlice } from './slices/bookmarksSlice';
import { createTagsSlice } from './slices/tagsSlice';
import { createGenresSlice } from './slices/genresSlice';
import { createGlobalSlice } from './slices/globalSlice';

export const useCatalogFiltersStoreBase = create<CatalogFiltersStoreType>()(
    devtools(
        (...a) => ({
            ...createSearchSlice(...a),
            ...createSortByOrderSlice(...a),
            ...createGenresSlice(...a),
            ...createTagsSlice(...a),
            ...createMangaTypeSlice(...a),
            ...createMangaStatusSlice(...a),
            ...createBookmarksSlice(...a),
            ...createChapterCountSlice(...a),
            ...createRateCountSlice(...a),
            ...createRateSlice(...a),
            ...createAgeRateSlice(...a),
            ...createReleaseDateSlice(...a),
            ...createGlobalSlice(...a),
        }),
        { name: 'CatalogFiltersStore' },
    ),
);

export const useCatalogFiltersStore = createSelectorsForVanillaStore(useCatalogFiltersStoreBase);
