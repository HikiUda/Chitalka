import { z } from 'zod';
import { useCallback } from 'react';

import { ageRatingSchema } from '../slices/ageRating/ageRatingSchema';
import { bookLangSchema } from '../slices/bookLang/bookLangSchema';
import { bookmarksSchema } from '../slices/bookmarks/bookmarksSchema';
import { chapterCountSchema } from '../slices/chapterCount/chapterCountSchema';
import { genresSchema } from '../slices/genres/genresSchema';
import { mangaTypeSchema } from '../slices/mangaType/mangaTypeSchema';
import { orderSchema } from '../slices/order/orderSchema';
import { rateCountSchema } from '../slices/rateCount/rateCountSchema';
import { rateSchema } from '../slices/rate/rateSchema';
import { releaseDateSchema } from '../slices/releaseDate/releaseDateSchema';
import { searchSchema } from '../slices/search/searchSchema';
import { sortBySchema } from '../slices/sortBy/sortBySchema';
import { statusSchema } from '../slices/status/statusSchema';
import { tagsSchema } from '../slices/tags/tagsSchema';

import { clearEmptyField, validateFromTo } from '../helpers/helpers';
import { useMangaCatalogFiltersStore } from './useMangaCatalogFiltersStore';
import { useUrlSearchParams } from '@/shared/lib/hooks/useUrlSearchParams';

const MangaCatalogFiltersSchema = ageRatingSchema
    .and(bookLangSchema)
    .and(bookmarksSchema)
    .and(chapterCountSchema)
    .and(genresSchema)
    .and(mangaTypeSchema)
    .and(orderSchema)
    .and(rateCountSchema)
    .and(rateSchema)
    .and(releaseDateSchema)
    .and(searchSchema)
    .and(sortBySchema)
    .and(statusSchema)
    .and(tagsSchema);
export type MangaCatalogFilters = z.infer<typeof MangaCatalogFiltersSchema>;

export function useMangaCatalogApplyFilters(callback?: (filters: MangaCatalogFilters) => void) {
    const { setAnySearchParams } = useUrlSearchParams();
    const getFilters = useMangaCatalogFiltersStore.use.getFilters();
    const setAppliedFilters = useMangaCatalogFiltersStore.use.setAppliedFilters();

    const applyFiltersCore = useCallback(() => {
        const filters = validateFromTo(
            clearEmptyField(MangaCatalogFiltersSchema.parse(getFilters())),
        );
        setAppliedFilters(filters);
        return filters;
    }, [getFilters, setAppliedFilters]);

    const applyFilters = useCallback(() => {
        const filters = applyFiltersCore();
        setAnySearchParams(filters);
        callback?.(filters);
    }, [applyFiltersCore, setAnySearchParams, callback]);

    return { applyFilters, applyFiltersCore };
}
