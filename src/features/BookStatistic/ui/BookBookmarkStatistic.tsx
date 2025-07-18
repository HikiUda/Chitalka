import { Bookmarks } from '@/shared/kernel/book';
import { Progress } from '@/shared/ui/kit/progress';
import { Heading } from '@/shared/ui/kit/heading';
import { Skeleton } from '@/shared/ui/kit/skeleton';

type BookBookmarksStatisticProps = {
    className?: string;
    isLoading: boolean;
    getBookmarkCount: (bookmark?: Bookmarks) => number;
    getBookmarkPercentage: (bookmark: Bookmarks) => number;
};

export const BookBookmarkStatistic = (props: BookBookmarksStatisticProps) => {
    const { className, isLoading, getBookmarkCount, getBookmarkPercentage } = props;

    return (
        <div className={className}>
            <Heading variant="h3" color="primary" className="mb-1">
                В закладках у {getBookmarkCount()} пользователей
            </Heading>
            <div className="table">
                {!isLoading &&
                    Object.values(Bookmarks).map((bookmark) => (
                        <div className="table-row" key={bookmark}>
                            <div className="table-cell px-2 py-1.5">{bookmark}</div>
                            <div className="table-cell px-2 py-1.5 w-full">
                                <Progress value={getBookmarkPercentage(bookmark)} />
                            </div>
                            <div className="table-cell px-2 py-1.5">
                                {getBookmarkPercentage(bookmark)}%
                            </div>
                            <div className="table-cell px-2 py-1.5 text-xs">
                                {getBookmarkCount(bookmark)}
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
