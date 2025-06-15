import { useCallback, useState } from 'react';
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
import { useApplyMangaCatalogFilters } from './useApplyMangaCatalogFilters';
import { useUrlSearchParams } from '@/shared/lib/hooks/useUrlSearchParams';

const MangaCatalogFiltersSchemaUrl = SearchSchemaUrl.and(OrderSchemaUrl)
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

export function useInitMangaCatalogFilters() {
    const [init, setInit] = useState(false);
    const { getAllSearchParams } = useUrlSearchParams();
    const setInitialState = useMangaCatalogFiltersStore.use.setInitialState();
    const appliedFilters = useMangaCatalogFiltersStore.use.appliedFilters();
    const { applyFilters } = useApplyMangaCatalogFilters(() => 0, false);

    const initFilters = useCallback(() => {
        if (init) return;
        setInit(true);
        const params = getAllSearchParams();
        if (Object.keys(params).length === 0) return;
        const data = MangaCatalogFiltersSchemaUrl.parse(params);
        setInitialState(data);
        applyFilters();
    }, [applyFilters, getAllSearchParams, init, setInitialState]);

    initFilters();

    return { appliedFilters };
}
