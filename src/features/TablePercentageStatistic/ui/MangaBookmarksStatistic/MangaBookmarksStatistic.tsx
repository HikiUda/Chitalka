import { memo } from 'react';
import { useQuery } from '@tanstack/react-query';
import { MangaIdType } from '@/shared/entities/manga';
import { MangaBookmarkStatisticApi } from '../../model/api/bookmark/mangaBookmarkStatisticApi';
import { TableStatistic } from '../TableStatistic/TableStatistic';

interface MangaBookmarksStatisticProps {
    className?: string;
    mangaId: MangaIdType;
}

export const MangaBookmarksStatistic = memo((props: MangaBookmarksStatisticProps) => {
    const { className, mangaId } = props;

    const { data, isLoading } = useQuery(MangaBookmarkStatisticApi.getQueryOptions(mangaId));

    return (
        <TableStatistic
            className={className}
            lines={data?.bookmarks}
            isLoading={isLoading}
            title={`В закладках у ${data?.all} пользователей`}
        />
    );
});
