import { memo, ReactNode } from 'react';
import { classNames } from '@/shared/lib/helpers/classNames';
import { VStack } from '@/shared/ui/Stack';

import { Heading } from '@/shared/ui/Heading';
import Skeleton from 'react-loading-skeleton';
import { LineStatistic } from '../LineStatistic/LineStatistic';
import { StatisticItemType } from '../../model/api/scheme/percentItemScheme';
import cls from './TableStatistic.module.scss';

interface MangaRateStatisticProps {
    className?: string;
    title?: string;
    isLoading?: boolean;
    loadingLines?: number;
    lines?: StatisticItemType[];
    renderLines?: (line: StatisticItemType) => ReactNode;
}

export const TableStatistic = memo((props: MangaRateStatisticProps) => {
    const { className, lines, renderLines, isLoading, title, loadingLines = 5 } = props;

    if (isLoading)
        return (
            <VStack align="stretch" className={classNames(cls.TableStatistic, {}, [className])}>
                <Skeleton style={{ marginBottom: 10 }} height={30} />
                <Skeleton style={{ marginBottom: 10 }} count={loadingLines} height={20} />
            </VStack>
        );
    if (!lines?.length) return null;
    return (
        <VStack max className={classNames(cls.TableStatistic, {}, [className])}>
            <Heading className={cls.title} color="primary" HeadingTag="h3">
                {title}
            </Heading>
            <div className={cls.table}>
                {renderLines
                    ? lines.map(renderLines)
                    : lines.map((line) => (
                          <LineStatistic
                              key={line.title}
                              count={line.count}
                              percent={line.percentage}
                              title={line.title}
                          />
                      ))}
            </div>
        </VStack>
    );
});
