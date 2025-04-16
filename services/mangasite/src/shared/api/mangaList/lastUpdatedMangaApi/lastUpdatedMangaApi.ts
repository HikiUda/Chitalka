import { infiniteQueryOptions } from '@tanstack/react-query';
import { $apiManga } from '../base';
import { validateMangaListItemLastUpdatedPagination } from '../validate/lastUpdatedPagination';

type LastUpdatedMangaScope = 'all' | 'my' | 'popular';

interface GetLastUpdatedMangaProps {
    page: number;
    limit: number;
    scope: LastUpdatedMangaScope;
}

class LastUpdatedManga {
    async getLastUpdated(props: GetLastUpdatedMangaProps) {
        const data = await $apiManga
            .get('last-updated', {
                searchParams: {
                    ...props,
                },
            })
            .json();

        return await validateMangaListItemLastUpdatedPagination(data);
    }
    getLastUpdatedInfinityQueryOptions(scope: LastUpdatedMangaScope = 'all', limit: number = 10) {
        return infiniteQueryOptions({
            queryKey: ['last-updated', scope, limit],
            queryFn: ({ pageParam }) => this.getLastUpdated({ page: pageParam, scope, limit }),
            initialPageParam: 1,
            getNextPageParam: (result) => result.nextPage,
            select: (result) => result.pages.flatMap((page) => page.data),
        });
    }
}

const LastUpdatedMangaApi = new LastUpdatedManga();
export { LastUpdatedMangaApi };
