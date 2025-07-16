import { FC } from 'react';
import { useGetMangaBookmarkStatistic } from './useGetMangaBookmarkStatistic';

import { Bookmarks, BookIdType } from '@/shared/kernel/book';
import { Progress } from '@/shared/ui/kit/progress';
import { Heading } from '@/shared/ui/kit/heading';
import { Skeleton } from '@/shared/ui/kit/skeleton';

interface MangaBookmarksStatisticProps {
    className?: string;
    mangaId: BookIdType;
}

export const MangaBookmarksStatistic: FC<MangaBookmarksStatisticProps> = (props) => {
    const { className, mangaId } = props;

    const { data, isLoading } = useGetMangaBookmarkStatistic(mangaId);

    if (!data) return null;

    return (
        <div className={className}>
            <Heading variant="h3" color="primary" className="mb-1">
                В закладках у {data.count || '??'} пользователей
            </Heading>
            <div className="table">
                {data &&
                    Object.values(Bookmarks).map((row) => (
                        <div className="table-row" key={row}>
                            <div className="table-cell px-2 py-1.5">{row}</div>
                            <div className="table-cell px-2 py-1.5 w-full">
                                <Progress value={data.statistic[row].percentage} />
                            </div>
                            <div className="table-cell px-2 py-1.5">
                                {data.statistic[row].percentage}%
                            </div>
                            <div className="table-cell px-2 py-1.5 text-xs">
                                {data.statistic[row].count}
                            </div>
                        </div>
                    ))}
                {isLoading &&
                    Object.values(Bookmarks).map((bookmark) => (
                        <div className="table-row" key={bookmark}>
                            <div className="table-cell px-2 py-1.5">{bookmark}</div>
                            <div className="table-cell px-2 py-1.5 w-full">
                                <Skeleton className="w-full h-4" />
                            </div>
                            <div className="table-cell px-2 py-1.5">
                                <Skeleton className="w-20 h-4" />
                            </div>
                        </div>
                    ))}
            </div>
        </div>
    );
};
