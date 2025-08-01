import { StarIcon } from 'lucide-react';
import { RateValues } from '../model/rateValues';
import { Progress } from '@/shared/ui/kit/progress';
import { Heading } from '@/shared/ui/kit/heading';
import { Skeleton } from '@/shared/ui/kit/skeleton';
import { createI18nModule } from '@/shared/kernel/i18n';

function getChart(ind: number) {
    if (ind > 8) return 'chart-1';
    if (ind > 6) return 'chart-2';
    if (ind > 4) return 'chart-3';
    if (ind > 2) return 'chart-4';
    return 'chart-5';
}

type BookRateStatisticProps = {
    className?: string;
    rate: number;
    isLoading: boolean;
    getRateCount: (rate?: RateValues) => number;
    getRatePercentage: (rate: RateValues) => number;
};

const { useI18n } = createI18nModule({
    overallRating: {
        ru: (...args) => `Общая оценка ${args[0]} от ${args[1]} пользователей`,
        en: (...args) => `Overall rating ${args[0]} from ${args[1]} users`,
    },
});

export const BookRateStatistic = (props: BookRateStatisticProps) => {
    const { className, rate, isLoading, getRateCount, getRatePercentage } = props;
    const t = useI18n();

    return (
        <div className={className}>
            <Heading variant="h3" color="primary" className="mb-1">
                {t('overallRating', [rate, getRateCount()])}
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
                                <Progress
                                    variant={getChart(rate)}
                                    value={getRatePercentage(rateValue)}
                                />
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
