import { memo } from 'react';
import { useQuery } from '@tanstack/react-query';
import { MangaIdType } from '@/shared/kernel/manga';
import StartSvg from '@/shared/assets/icon/common/star.svg';
import { Icon } from '@/shared/ui/Icon';
import { MangaRateStatisticApi } from '../../model/api/rate/mangaRateStatisticApi';
import { TableStatistic } from '../TableStatistic/TableStatistic';
import { LineStatistic } from '../LineStatistic/LineStatistic';

interface MangaRateStatisticProps {
    className?: string;
    mangaId: MangaIdType;
}

export const MangaRateStatistic = memo((props: MangaRateStatisticProps) => {
    const { className, mangaId } = props;
    const { data, isLoading } = useQuery(MangaRateStatisticApi.getQueryOptions(mangaId));

    return (
        <TableStatistic
            className={className}
            lines={data?.rateStatistic?.reverse()}
            isLoading={isLoading}
            title="Оценки пользователей"
            loadingLines={10}
            renderLines={(line) => (
                <LineStatistic
                    key={line.title}
                    count={line.count}
                    percent={line.percentage}
                    title={line.title}
                    before={<Icon Svg={StartSvg} size={20} />}
                />
            )}
        />
    );
});
