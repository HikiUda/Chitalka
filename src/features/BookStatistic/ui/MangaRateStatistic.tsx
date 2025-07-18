import { useMangaGetRateStatistic } from '../model/useMangaGetRateStatistic';
import { BookRateStatistic } from './BookRateStatistic';
import { BookId } from '@/shared/kernel/book/book';

type MangaRateStatisticProps = {
    className?: string;
    mangaId: BookId;
};

export const MangaRateStatistic = (props: MangaRateStatisticProps) => {
    const { className, mangaId } = props;
    const { getRateCount, getRatePercentage, rate, isLoading } = useMangaGetRateStatistic(mangaId);

    return (
        <BookRateStatistic
            className={className}
            rate={rate}
            isLoading={isLoading}
            getRateCount={getRateCount}
            getRatePercentage={getRatePercentage}
        />
    );
};
