import { BookCategories, useBookCategories } from './useBookCategories';
import { getRoute } from '@/shared/kernel/router';

export function useMangaCategories(data: BookCategories) {
    return useBookCategories(data, getRoute.MANGA_CATALOG());
}
