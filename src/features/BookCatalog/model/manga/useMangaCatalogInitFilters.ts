import { useCallback, useState } from 'react';

import { ageRatingSchemaUrl } from '../slices/ageRating/ageRatingSchema';
import { bookLangSchemaUrl } from '../slices/bookLang/bookLangSchema';
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

import { useMangaCatalogFiltersStore } from './useMangaCatalogFiltersStore';
import { useMangaCatalogApplyFilters } from './useMangaCatalogApplyFilters';
import { useUrlSearchParams } from '@/shared/lib/hooks/useUrlSearchParams';

const MangaCatalogFiltersSchemaUrl = ageRatingSchemaUrl
    .and(bookLangSchemaUrl)
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

export function useMangaCatalogInitFilters() {
    const [isInit, setIsInit] = useState(false);
    const { getAllSearchParams, setAnySearchParams } = useUrlSearchParams();
    const resetAll = useMangaCatalogFiltersStore.use.resetAll();
    const { applyFiltersCore } = useMangaCatalogApplyFilters();
    const appliedFilters = useMangaCatalogFiltersStore.use.appliedFilters();

    const initFilters = useCallback(() => {
        const params = getAllSearchParams();
        if (Object.keys(params).length === 0) {
            setAnySearchParams(appliedFilters);
        } else {
            const data = MangaCatalogFiltersSchemaUrl.parse(params);
            resetAll(data);
            applyFiltersCore();
        }
        setIsInit(true);
    }, [getAllSearchParams, resetAll, applyFiltersCore, setAnySearchParams, appliedFilters]);

    return { initFilters, isInit };
}
