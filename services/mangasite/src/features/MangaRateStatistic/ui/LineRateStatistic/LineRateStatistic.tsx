import { memo } from 'react';
import { HStack } from '@packages/ui/src/shared/Stack';
import { Icon } from '@packages/ui/src/shared/Icon';
import { ProgressBar } from '@packages/ui/src/shared/ProgressBar';
import StarSvg from '@packages/ui/src/assets/icon/common/star.svg';
import cls from './LineRateStatistic.module.scss';

interface LineRateStatisticProps {
    className?: string;
}

export const LineRateStatistic = memo((props: LineRateStatisticProps) => {
    const { className } = props;

    return (
        <HStack max justify="start">
            <Icon Svg={StarSvg} width={20} height={20} />
            <span>10</span>
            <ProgressBar valueVisible={false} className={cls.max} value={50} />
            <span>50%</span>
            <span className={cls.count}>3098</span>
        </HStack>
    );
});
