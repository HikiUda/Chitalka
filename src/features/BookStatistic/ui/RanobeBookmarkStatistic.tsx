import { useRanobeGetBookmarkStatistic } from '../model/useRanobeGetBookmarkStatistic';
import { BookBookmarkStatistic } from './BookBookmarkStatistic';
import { BookId } from '@/shared/kernel/book';

type RanobeBookmarksStatisticProps = {
    className?: string;
    ranobeId: BookId;
};

export const RanobeBookmarkStatistic = (props: RanobeBookmarksStatisticProps) => {
    const { className, ranobeId } = props;
    const { getBookmarkCount, getBookmarkPercentage, isLoading } =
        useRanobeGetBookmarkStatistic(ranobeId);

    return (
        <BookBookmarkStatistic
            className={className}
            isLoading={isLoading}
            getBookmarkCount={getBookmarkCount}
            getBookmarkPercentage={getBookmarkPercentage}
        />
    );
};
