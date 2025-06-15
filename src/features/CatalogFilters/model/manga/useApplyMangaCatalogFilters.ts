import { z } from 'zod';
import { useCallback } from 'react';
import { SearchSchema } from '../slices/search/searchSchema';
import { OrderSchema } from '../slices/order/orderSchema';
import { SortBySchema } from '../slices/sortBy/sortBySchema';
import { ageRateSchema } from '../slices/ageRate/ageRateSchema';
import { chapterCountSchema } from '../slices/chapterCount/chapterCountSchema';
import { RateSchema } from '../slices/rate/rateSchema';
import { RateCountSchema } from '../slices/rateCount/rateCountSchema';
import { releaseDateSchema } from '../slices/releaseDate/releaseDateSchema';
import { genresSchema } from '../slices/genres/genresSchema';
import { tagsSchema } from '../slices/tags/tagsSchema';
import { statusSchema } from '../slices/status/statusSchema';
import { mangaTypeSchema } from '../slices/mangaType/mangaTypeSchema';
import { bookmarksSchema } from '../slices/bookmarks/bookmarksSchema';
import { clearEmptyField, validateFromTo } from '../helpers/helpers';
import { useMangaCatalogFiltersStore } from './mangaCatalogFiltersStore';
import { useUrlSearchParams } from '@/shared/lib/hooks/useUrlSearchParams';

const MangaCatalogFiltersSchema = SearchSchema.and(OrderSchema)
    .and(SortBySchema)
    .and(ageRateSchema)
    .and(chapterCountSchema)
    .and(RateSchema)
    .and(RateCountSchema)
    .and(releaseDateSchema)
    .and(genresSchema)
    .and(tagsSchema)
    .and(statusSchema)
    .and(mangaTypeSchema)
    .and(bookmarksSchema);

export type MangaCatalogFiltersType = z.infer<typeof MangaCatalogFiltersSchema>;

export function useApplyMangaCatalogFilters(callback?: () => void, init: boolean = true) {
    const { setSearchParams } = useUrlSearchParams();
    const getFilters = useMangaCatalogFiltersStore.use.getFilters();
    const setAppliedFilters = useMangaCatalogFiltersStore.use.setAppliedFilters();

    const applyFilters = useCallback(() => {
        const filters = validateFromTo(
            clearEmptyField(MangaCatalogFiltersSchema.parse(getFilters())),
        );
        setAppliedFilters(filters);
        if (init) {
            setSearchParams(
                Object.fromEntries(
                    Object.entries(filters).map(([key, value]) => [key, String(value)]),
                ),
            );
        }

        callback?.();
    }, [callback, getFilters, init, setAppliedFilters, setSearchParams]);

    return { applyFilters };
}
