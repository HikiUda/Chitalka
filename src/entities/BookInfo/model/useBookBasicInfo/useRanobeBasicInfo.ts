import { BookBasicInfoInput, useBookBasicInfo } from './useBookBasicInfo';
import { getRoute } from '@/shared/kernel/router';

export function useRanobeBasicInfo(data: BookBasicInfoInput) {
    return useBookBasicInfo(data, getRoute.RANOBE_CATALOG());
}
