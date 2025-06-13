import { useCallback } from 'react';
import { ageRateSchemaUrl } from '../slices/ageRate/ageRateSchema';
import { bookmarksSchemaUrl } from '../slices/bookmarks/bookmarksSchema';
import { chapterCountSchemaUrl } from '../slices/chapterCount/chapterCountSchema';
import { genresSchemaUrl } from '../slices/genres/genresSchema';
import { mangaTypeSchemaUrl } from '../slices/mangaType/mangaTypeSchema';
import { OrderSchemaUrl } from '../slices/order/orderSchema';
import { RateSchemaUrl } from '../slices/rate/rateSchema';
import { RateCountSchemaUrl } from '../slices/rateCount/rateCountSchema';
import { releaseDateSchemaUrl } from '../slices/releaseDate/releaseDateSchema';
import { SearchSchemaUrl } from '../slices/search/searchSchema';
import { SortBySchemaUrl } from '../slices/sortBy/sortBySchema';
import { statusSchemaUrl } from '../slices/status/statusSchema';
import { tagsSchemaUrl } from '../slices/tags/tagsSchema';
import { useMangaCatalogFiltersStore } from './mangaCatalogFiltersStore';
import { useApplyMangaFilters } from './useApplyMangaFilters';
import { useUrlSearchParams } from '@/shared/lib/hooks/useUrlSearchParams';

export const MangaCatalogFiltersSchemaUrl = SearchSchemaUrl.and(OrderSchemaUrl)
    .and(SortBySchemaUrl)
    .and(ageRateSchemaUrl)
    .and(chapterCountSchemaUrl)
    .and(RateSchemaUrl)
    .and(RateCountSchemaUrl)
    .and(releaseDateSchemaUrl)
    .and(genresSchemaUrl)
    .and(tagsSchemaUrl)
    .and(statusSchemaUrl)
    .and(mangaTypeSchemaUrl)
    .and(bookmarksSchemaUrl);

export function useInitMangaFilters() {
    const { getAllSearchParams } = useUrlSearchParams();
    const resetAll = useMangaCatalogFiltersStore.use.resetAll();
    const setInitialState = useMangaCatalogFiltersStore.use.setInitialState();
    const { applyFilters } = useApplyMangaFilters();

    const initMangaFilters = useCallback(() => {
        const params = getAllSearchParams();
        if (Object.keys(params).length === 0) return;
        const data = MangaCatalogFiltersSchemaUrl.parse(params);
        resetAll();
        setInitialState(data);
        applyFilters();
    }, [applyFilters, getAllSearchParams, resetAll, setInitialState]);

    return { initMangaFilters };
}
