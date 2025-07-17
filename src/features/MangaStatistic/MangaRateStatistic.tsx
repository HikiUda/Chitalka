import { FC, useMemo } from 'react';
import { StarIcon } from 'lucide-react';
import { useGetMangaRateStatistic } from './useGetMangaRateStatistic';
import { BookIdType } from '@/shared/kernel/book/book';
import { Progress } from '@/shared/ui/kit/progress';
import { Heading } from '@/shared/ui/kit/heading';
import { Skeleton } from '@/shared/ui/kit/skeleton';

interface MangaRateStatisticProps {
    className?: string;
    mangaId: BookIdType;
}

export const MangaRateStatistic: FC<MangaRateStatisticProps> = (props) => {
    const { className, mangaId } = props;

    const { data, isLoading } = useGetMangaRateStatistic(mangaId);

    const rateStatistic = useMemo(() => {
        return [10, 9, 8, 7, 6, 5, 4, 3, 2, 1] as const;
    }, []);

    if (!data) return null;
    return (
        <div className={className}>
            <Heading variant="h3" color="primary" className="mb-1">
                Общая оценка {data?.rate || '??'} от {data?.count || '??'} пользователей
            </Heading>
            <div className="table">
                {rateStatistic.map((row) => (
                    <div className="table-row" key={row}>
                        <div className="table-cell px-2 py-1.5">{row}</div>
                        <div className="table-cell align-middle">
                            <StarIcon className="stroke-primary fill-primary p-1" />
                        </div>
                        <div className="table-cell px-2 py-1.5 w-full">
                            <Progress value={data.statistic[row].percentage} />
                        </div>
                        <div className="table-cell px-2 py-1.5">
                            {data.statistic[row].percentage}%
                        </div>
                        <div className="table-cell px-2 py-1.5">{data.statistic[row].count}</div>
                    </div>
                ))}
                {isLoading &&
                    Array(10)
                        .fill(0)
                        .map((_, ind) => (
                            <div className="table-row" key={ind}>
                                <div className="table-cell px-2 py-1.5">{10 - ind}</div>
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
