import { memo } from 'react';
import { classNames } from '@packages/model/src/lib/classNames';
import { VStack } from '@packages/ui/src/shared/Stack';

import { Heading } from '@packages/ui/src/shared/Heading';
import { LineRateStatistic } from '../LineRateStatistic/LineRateStatistic';
import cls from './MangaRateStatistic.module.scss';

interface MangaRateStatisticProps {
    className?: string;
}

export const MangaRateStatistic = memo((props: MangaRateStatisticProps) => {
    const { className } = props;
    //TODO rate button
    return (
        <VStack max className={classNames(cls.MangaRateStatistic, {}, [className])}>
            <Heading color="primary" HeadingTag="h3">
                Оценки пользователей
            </Heading>
            <LineRateStatistic />
            <LineRateStatistic />
            <LineRateStatistic />
            <LineRateStatistic />
            <LineRateStatistic />
            <LineRateStatistic />
            <LineRateStatistic />
            <LineRateStatistic />
            <LineRateStatistic />
            <LineRateStatistic />
        </VStack>
    );
});
