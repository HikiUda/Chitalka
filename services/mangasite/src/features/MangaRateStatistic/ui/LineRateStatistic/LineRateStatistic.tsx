import { memo } from 'react';
import { Icon } from '@packages/ui/src/shared/Icon';
import { ProgressBar } from '@packages/ui/src/shared/ProgressBar';
import StarSvg from '@packages/ui/src/assets/icon/common/star.svg';
import { classNames } from '@packages/model/src/lib/helpers/classNames';
import cls from './LineRateStatistic.module.scss';

interface LineRateStatisticProps {
    className?: string;
    title?: string;
    percent?: number;
    count?: number;
}

export const LineRateStatistic = memo((props: LineRateStatisticProps) => {
    const { className, title, percent, count } = props;

    return (
        <div className={classNames(cls.row, {}, [className])}>
            <Icon className={cls.cell} Svg={StarSvg} width={20} height={20} />
            <span className={cls.cell}>{title}</span>
            <ProgressBar
                valueVisible={false}
                className={classNames(cls.max, {}, [cls.cell])}
                value={percent}
            />
            <span className={cls.cell}>{percent}%</span>
            <span className={classNames(cls.count, {}, [cls.cell])}>{count}</span>
        </div>
    );
});
