import { useMangaGetBookmarkStatistic } from '../model/useMangaGetBookmarkStatistic';
import { BookBookmarkStatistic } from './BookBookmarkStatistic';
import { BookId } from '@/shared/kernel/book';

type MangaBookmarksStatisticProps = {
    className?: string;
    mangaId: BookId;
};

export const MangaBookmarkStatistic = (props: MangaBookmarksStatisticProps) => {
    const { className, mangaId } = props;
    const { getBookmarkCount, getBookmarkPercentage, isLoading } =
        useMangaGetBookmarkStatistic(mangaId);

    return (
        <BookBookmarkStatistic
            className={className}
            isLoading={isLoading}
            getBookmarkCount={getBookmarkCount}
            getBookmarkPercentage={getBookmarkPercentage}
        />
    );
};
