import { BookCategories, useBookCategories } from './useBookCategories';
import { getRoute } from '@/shared/kernel/router';

export function useRanobeCategories(data: BookCategories) {
    return useBookCategories(data, getRoute.RANOBE_CATALOG());
}
