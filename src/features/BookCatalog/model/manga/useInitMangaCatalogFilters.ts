import { useCallback, useState } from 'react';

import { ageRatingSchemaUrl } from '../slices/ageRating/ageRatingSchema';
import { bookmarksSchemaUrl } from '../slices/bookmarks/bookmarksSchema';
import { chapterCountSchemaUrl } from '../slices/chapterCount/chapterCountSchema';
import { genresSchemaUrl } from '../slices/genres/genresSchema';
import { mangaTypeSchemaUrl } from '../slices/mangaType/mangaTypeSchema';
import { orderSchemaUrl } from '../slices/order/orderSchema';
import { rateSchemaUrl } from '../slices/rate/rateSchema';
import { rateCountSchemaUrl } from '../slices/rateCount/rateCountSchema';
import { releaseDateSchemaUrl } from '../slices/releaseDate/releaseDateSchema';
import { searchSchemaUrl } from '../slices/search/searchSchema';
import { sortBySchemaUrl } from '../slices/sortBy/sortBySchema';
import { statusSchemaUrl } from '../slices/status/statusSchema';
import { tagsSchemaUrl } from '../slices/tags/tagsSchema';

import { useMangaCatalogFiltersStore } from './mangaCatalogFiltersStore';
import { useApplyMangaCatalogFilters } from './useApplyMangaCatalogFilters';
import { useUrlSearchParams } from '@/shared/lib/hooks/useUrlSearchParams';

const MangaCatalogFiltersSchemaUrl = ageRatingSchemaUrl
    .and(bookmarksSchemaUrl)
    .and(chapterCountSchemaUrl)
    .and(genresSchemaUrl)
    .and(mangaTypeSchemaUrl)
    .and(orderSchemaUrl)
    .and(rateCountSchemaUrl)
    .and(rateSchemaUrl)
    .and(releaseDateSchemaUrl)
    .and(searchSchemaUrl)
    .and(sortBySchemaUrl)
    .and(statusSchemaUrl)
    .and(tagsSchemaUrl);

export function useInitMangaCatalogFilters() {
    const [init, setInit] = useState(false);
    const { getAllSearchParams } = useUrlSearchParams();
    const resetAll = useMangaCatalogFiltersStore.use.resetAll();
    const appliedFilters = useMangaCatalogFiltersStore.use.appliedFilters();
    const { applyFilters } = useApplyMangaCatalogFilters(() => 0, false);

    const initFilters = useCallback(() => {
        if (init) return;
        setInit(true);
        const params = getAllSearchParams();
        if (Object.keys(params).length === 0) return;
        const data = MangaCatalogFiltersSchemaUrl.parse(params);
        resetAll(data);
        applyFilters();
    }, [applyFilters, getAllSearchParams, init, resetAll]);

    initFilters();

    return { appliedFilters };
}
