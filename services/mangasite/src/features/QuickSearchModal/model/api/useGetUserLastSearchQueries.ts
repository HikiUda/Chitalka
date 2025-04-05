import { useQuery } from '@tanstack/react-query';
import { $api } from '@packages/model/src/api/baseApi/kyBase';

export const QUERY_KEY_GET_USER_LAST_SEARCHQEURIES = 'getUserLastSearchQueries';

export const useGetUserLastSearchQueries = () => {
    const query = useQuery({
        queryKey: [QUERY_KEY_GET_USER_LAST_SEARCHQEURIES],
        queryFn: async () => {
            const lastSearch = await $api.get<string[]>('manga/user-last-search-query').json();
            return lastSearch;
        },
        placeholderData: [],
    });

    return query;
};
