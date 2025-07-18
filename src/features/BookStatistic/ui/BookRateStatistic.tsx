import { StarIcon } from 'lucide-react';
import { RateValues } from '../model/rateValues';
import { Progress } from '@/shared/ui/kit/progress';
import { Heading } from '@/shared/ui/kit/heading';
import { Skeleton } from '@/shared/ui/kit/skeleton';

type BookRateStatisticProps = {
    className?: string;
    rate: number;
    isLoading: boolean;
    getRateCount: (rate?: RateValues) => number;
    getRatePercentage: (rate: RateValues) => number;
};

export const BookRateStatistic = (props: BookRateStatisticProps) => {
    const { className, rate, isLoading, getRateCount, getRatePercentage } = props;

    return (
        <div className={className}>
            <Heading variant="h3" color="primary" className="mb-1">
                Общая оценка {rate} от {getRateCount()} пользователей
            </Heading>
            <div className="table">
                {!isLoading &&
                    RateValues.map((rateValue) => (
                        <div className="table-row" key={rateValue}>
                            <div className="table-cell px-2 py-1.5">{rateValue}</div>
                            <div className="table-cell align-middle">
                                <StarIcon className="stroke-primary fill-primary p-1" />
                            </div>
                            <div className="table-cell px-2 py-1.5 w-full">
                                <Progress value={getRatePercentage(rateValue)} />
                            </div>
                            <div className="table-cell px-2 py-1.5">
                                {getRatePercentage(rateValue)}%
                            </div>
                            <div className="table-cell px-2 py-1.5">{getRateCount(rateValue)}</div>
                        </div>
                    ))}
                {isLoading &&
                    RateValues.map((rateValue) => (
                        <div className="table-row" key={rateValue}>
                            <div className="table-cell px-2 py-1.5">{rateValue}</div>
                            <div className="table-cell align-middle">
                                <StarIcon className="stroke-primary fill-primary p-1" />
                            </div>
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
