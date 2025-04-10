import { queryOptions } from '@tanstack/react-query';
import { $apiManga } from '../base';
import { validateGetLastSearch, validateQuickSearch } from './validate';

class QuickSearch {
    async quickSearch(search: string) {
        const data = await $apiManga
            .get('quick-search', {
                searchParams: { search },
            })
            .json();
        return (await validateQuickSearch(data)).data;
    }

    quickSearchQueryOptions(search: string) {
        return queryOptions({
            // eslint-disable-next-line @tanstack/query/exhaustive-deps
            queryKey: ['quick-search'],
            queryFn: () => this.quickSearch(search),
        });
    }

    async getLastSearch() {
        const lastSearch = await $apiManga.get('quick-search/last').json();
        const data = await validateGetLastSearch(lastSearch);

        return data.data;
    }
    getLastSearchQueryOptions() {
        return queryOptions({
            queryKey: ['quick-search', 'last'],
            queryFn: () => this.getLastSearch(),
        });
    }
    async deleteLastSearch(search: string) {
        await $apiManga.delete('quick-search/last', { json: { search } });
    }
}

export default new QuickSearch();
