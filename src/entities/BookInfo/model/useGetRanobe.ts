import { parseISO } from 'date-fns';
import { useMemo } from 'react';
import { publicRqClient } from '@/shared/api/instance';
import { BookId } from '@/shared/kernel/book/book';
import { useAppLang } from '@/shared/kernel/i18n';

export function useGetRanobe(ranobeId: BookId) {
    const { lang } = useAppLang();
    const { data } = publicRqClient.useSuspenseQuery(
        'get',
        '/ranobe/{ranobeId}',
        {
            params: {
                path: {
                    ranobeId,
                },
                query: {
                    lang,
                },
            },
        },
        { staleTime: 1000 * 60 * 10 },
    );

    return useMemo(() => {
        const releaseDate = (data.releaseDate && parseISO(data.releaseDate)) || null;
        return { ranobe: { ...data, releaseDate } };
    }, [data]);
}
