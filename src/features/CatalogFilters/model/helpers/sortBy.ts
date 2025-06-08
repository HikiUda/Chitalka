import { ApiPaths } from '@/shared/api/instance';

export type SortByType = NonNullable<
    NonNullable<ApiPaths['/manga']['get']['parameters']['query']>['sortBy']
>;

export const SortBy: Record<SortByType, string> = {
    rating: 'rating',
    updateDate: 'updateDate',
    createDate: 'createDate',
    ruAlphabetically: 'ruAlphabetically',
    enAlphabetically: 'enAlphabetically',
    views: 'views',
    likes: 'likes',
    chapterCount: 'chapterCount',
} as const;
