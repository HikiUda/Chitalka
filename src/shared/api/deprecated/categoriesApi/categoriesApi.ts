import { queryOptions } from '@tanstack/react-query';
import { $api } from '../baseApi/kyBase';
import { validateCategories } from './validateCategories';

class Categories {
    async getGenres(search: string) {
        const genres = await $api.get('manga/genres', { searchParams: { search } }).json();
        return (await validateCategories(genres)).data;
    }
    async getTags(search: string) {
        const tags = await $api.get('manga/tags', { searchParams: { search } }).json();
        return (await validateCategories(tags)).data;
    }
    getGenresQueryOptions(search: string = '') {
        return queryOptions({
            // eslint-disable-next-line @tanstack/query/exhaustive-deps
            queryKey: ['manga', 'genres'],
            queryFn: () => this.getGenres(search),
        });
    }
    getTagsQueryOptions(search: string = '') {
        return queryOptions({
            // eslint-disable-next-line @tanstack/query/exhaustive-deps
            queryKey: ['manga', 'tags'],
            queryFn: () => this.getTags(search),
        });
    }
}

const CategoriesApi = new Categories();
export { CategoriesApi };
