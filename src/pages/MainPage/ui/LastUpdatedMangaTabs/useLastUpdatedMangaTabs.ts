import { useGetLastUpdatedAll } from './useGetLastUpdatedAll';
import { useGetLastUpdatedMy } from './useGetLastUpdatedMy';
import { ApiSchemas } from '@/shared/api/instance';
import { getRoute } from '@/shared/kernel/router';

export function useLastUpdatedMangaTabs(): {
    value: string;
    title: string;
    catalogLink: string;
    data: ApiSchemas['MangaListItemLastUpdatedDto'][];
    isFetching: boolean;
    hasNextPage: boolean;
    fetchNextPage: () => void;
    authOnly?: boolean;
}[] {
    const allManga = useGetLastUpdatedAll();
    const myManga = useGetLastUpdatedMy();

    return [
        {
            value: 'all',
            title: 'Все',
            catalogLink: `${getRoute.catalog()}?sortBy=updateDate`,
            data: allManga.data || [],
            fetchNextPage: () => allManga.fetchNextPage(),
            hasNextPage: allManga.hasNextPage && (allManga.data?.length || 0) < 50,
            isFetching: allManga.isFetching || allManga.isFetchingNextPage,
        },
        {
            value: 'my',
            title: 'Мои',
            catalogLink: `${getRoute.catalog()}?sortBy=updateDate&bookmarks=Reading,Readed`,
            data: myManga.data || [],
            fetchNextPage: () => myManga.fetchNextPage(),
            hasNextPage: myManga.hasNextPage && (myManga.data?.length || 0) < 50,
            isFetching: myManga.isFetching || myManga.isFetchingNextPage,
            authOnly: true,
        },
    ];
}
