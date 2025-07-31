import { useSuspenseQuery } from '@tanstack/react-query';
import { publicFetchClient } from '@/shared/api/instance';
import { useAppLang } from '@/shared/kernel/i18n';

export function useGetGenres(search?: string) {
    const { lang } = useAppLang();
    const { data, refetch } = useSuspenseQuery({
        // eslint-disable-next-line @tanstack/query/exhaustive-deps
        queryKey: ['genres', lang],
        queryFn: async () =>
            await publicFetchClient
                .GET('/book/genres', { params: { query: { search, lang } } })
                .then((res) => res.data?.data || []),
    });
    return { data, refetch };
}
