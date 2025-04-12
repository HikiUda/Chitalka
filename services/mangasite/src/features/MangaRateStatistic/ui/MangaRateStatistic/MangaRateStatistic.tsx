import { memo } from 'react';
import { classNames } from '@packages/model/src/lib/helpers/classNames';
import { VStack } from '@packages/ui/src/shared/Stack';

import { Heading } from '@packages/ui/src/shared/Heading';
import { useQuery } from '@tanstack/react-query';
import { MangaIdType } from '@packages/model/src/entities/manga';
import { LineRateStatistic } from '../LineRateStatistic/LineRateStatistic';
import { MangaRateStatisticApi } from '../../model/api/mangaRateStatisticApi';
import cls from './MangaRateStatistic.module.scss';

interface MangaRateStatisticProps {
    className?: string;
    mangaId: MangaIdType;
}

export const MangaRateStatistic = memo((props: MangaRateStatisticProps) => {
    const { className, mangaId } = props;
    const { data, isLoading } = useQuery(MangaRateStatisticApi.getQueryOptions(mangaId));
    //TODO loading
    if (!data || isLoading) return <div>Loading...</div>;
    //TODO rate button
    return (
        <VStack max className={classNames(cls.MangaRateStatistic, {}, [className])}>
            <Heading color="primary" HeadingTag="h3">
                Оценки пользователей
            </Heading>
            <div className={cls.table}>
                {data.rateStatistic.reverse().map((stat) => (
                    <LineRateStatistic
                        key={stat.title}
                        count={stat.count}
                        percent={stat.percentage}
                        title={stat.title}
                    />
                ))}
            </div>
        </VStack>
    );
});
