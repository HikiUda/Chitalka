import { useRanobeGetRateStatistic } from '../model/useRanobeGetRateStatistic';
import { BookRateStatistic } from './BookRateStatistic';
import { BookId } from '@/shared/kernel/book/book';

type RanobeRateStatisticProps = {
    className?: string;
    ranobeId: BookId;
};

export const RanobeRateStatistic = (props: RanobeRateStatisticProps) => {
    const { className, ranobeId } = props;
    const { getRateCount, getRatePercentage, rate, isLoading } =
        useRanobeGetRateStatistic(ranobeId);

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
