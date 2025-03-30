import { useQuery } from '@tanstack/react-query';
import { $api } from '@packages/model/src/api/base';

export const QUERY_KEY_GET_USER_LAST_SEARCHQEURIES = 'getUserLastSearchQueries';

export const useGetUserLastSearchQueries = () => {
    const query = useQuery({
        queryKey: [QUERY_KEY_GET_USER_LAST_SEARCHQEURIES],
        queryFn: async () => {
            const lastSearch = await $api.get<string[]>('/manga/user-last-search-query');
            return lastSearch.data;
        },
        placeholderData: [],
    });

    return { ...query, data: query.data ?? [] };
};
