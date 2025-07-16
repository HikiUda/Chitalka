import { BookBasicInfoInput, useBookBasicInfo } from './useBookBasicInfo';
import { getRoute } from '@/shared/kernel/router';

export function useMangaBasicInfo(data: BookBasicInfoInput) {
    return useBookBasicInfo(data, getRoute.MANGA_CATALOG());
}
