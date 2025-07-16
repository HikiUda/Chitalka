import { useGetMoreViewedManga } from './useGetMoreViewedManga';
import { useGetNewManga } from './useGetNewManga';
import { useGetRatingManga } from './useGetRatingManga';
import { ApiSchemas } from '@/shared/api/instance';

export function useNowReadManga(): {
    heading: string;
    data: ApiSchemas['CatalogManga'][] | undefined;
    isLoading: boolean;
}[] {
    const newManga = useGetNewManga();
    const ratingManga = useGetRatingManga();
    const moreViewedManga = useGetMoreViewedManga();

    return [
        {
            heading: 'Новинки',
            ...newManga,
        },
        {
            heading: 'Рейтинговые',
            ...ratingManga,
        },
        {
            heading: 'Просматриваемые',
            ...moreViewedManga,
        },
    ];
}
