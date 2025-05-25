import { FC } from 'react';
import { useGetMangaBookmarkStatistic } from './useGetMangaBookmarkStatistic';

import { Bookmarks, MangaIdType } from '@/shared/kernel/manga';
import { Progress } from '@/shared/ui/kit/progress';
import { Heading } from '@/shared/ui/kit/heading';
import { Skeleton } from '@/shared/ui/kit/skeleton';

interface MangaBookmarksStatisticProps {
    className?: string;
    mangaId: MangaIdType;
}

export const MangaBookmarksStatistic: FC<MangaBookmarksStatisticProps> = (props) => {
    const { className, mangaId } = props;

    const { data, isLoading } = useGetMangaBookmarkStatistic(mangaId);

    return (
        <div className={className}>
            <Heading variant="h3" color="primary" className="mb-1">
                В закладках у {data?.all || '??'} пользователей
            </Heading>
            <div className="table">
                {data &&
                    data.bookmarks.map((row) => (
                        <div className="table-row" key={row.title}>
                            <div className="table-cell px-2 py-1.5">{row.title}</div>
                            <div className="table-cell px-2 py-1.5 w-full">
                                <Progress value={row.percentage} />
                            </div>
                            <div className="table-cell px-2 py-1.5">{row.percentage}%</div>
                            <div className="table-cell px-2 py-1.5 text-xs">{row.count}</div>
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
