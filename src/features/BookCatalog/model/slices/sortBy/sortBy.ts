import { ApiPaths } from '@/shared/api/instance';

export type SortByType = NonNullable<
    NonNullable<ApiPaths['/catalog/manga']['get']['parameters']['query']>['sortBy']
>;

export const SortBy = {
    rating: 'rating',
    updateDate: 'updateDate',
    createDate: 'createDate',
    alphabetically: 'alphabetically',
    enAlphabetically: 'enAlphabetically',
    views: 'views',
    likes: 'likes',
    chapterCount: 'chapterCount',
} as const satisfies Record<SortByType, string>;
