import { getRoute } from '@/shared/kernel/router';

export type BookLastUpdatedTab = {
    value: 'all' | 'my';
    title: string;
    catalogLink: string;
    data: {
        id: number;
        urlId: string;
        title: string;
        cover: string;
        tome: number;
        chapter: number;
        chapterCreatedAt: string;
        chapterId: number;
        type: string;
    }[];
    fetchNextPage: () => void;
    isFetching: boolean;
    hasNextPage: boolean;
    bookLink: typeof getRoute.MANGA_READ | typeof getRoute.RANOBE_READ;
};
