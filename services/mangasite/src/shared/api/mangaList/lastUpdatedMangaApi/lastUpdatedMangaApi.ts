import { keepPreviousData, queryOptions } from '@tanstack/react-query';
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
    getLastUpdatedQueryOptions(
        scope: LastUpdatedMangaScope = 'all',
        limit: number = 10,
        page: number = 1,
    ) {
        return queryOptions({
            queryKey: ['last-updated', scope, limit, page],
            queryFn: () => this.getLastUpdated({ page, scope, limit }),
            placeholderData: keepPreviousData,
        });
    }
}

const LastUpdatedMangaApi = new LastUpdatedManga();
export { LastUpdatedMangaApi };
