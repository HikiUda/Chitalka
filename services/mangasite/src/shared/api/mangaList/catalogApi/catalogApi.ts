import { infiniteQueryOptions } from '@tanstack/react-query';
import { $apiManga } from '../base';
import { validateMangaListItemCatalogPagination } from '../validate/catalogPagination';
import { CatalogFiltersType } from './catalogScheme';

class Catalog {
    async getManga(page: number, limit: number, query: CatalogFiltersType) {
        const data = await $apiManga
            .get('', {
                searchParams: {
                    ...query,
                    page,
                    limit,
                },
            })
            .json();
        return await validateMangaListItemCatalogPagination(data);
    }
    getMangaInfinityQueryOptions(filters: () => CatalogFiltersType, limit: number = 20) {
        return infiniteQueryOptions({
            queryKey: ['catalog', limit],
            queryFn: ({ pageParam }) => this.getManga(pageParam, limit, filters()),
            initialPageParam: 1,
            getNextPageParam: (result) => result.nextPage,
            select: (result) => result.pages.flatMap((page) => page.data),
        });
    }
}

const CatalogApi = new Catalog();
export { CatalogApi };
