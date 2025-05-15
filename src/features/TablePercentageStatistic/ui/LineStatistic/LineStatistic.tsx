import { memo, ReactNode } from 'react';
import cls from './LineStatistic.module.scss';
import { ProgressBar } from '@/shared/deprecate-ui/ProgressBar';
import { classNames } from '@/shared/lib/helpers/classNames';

interface LineStatisticProps {
    className?: string;
    title?: string;
    percent?: number;
    count?: number;
    before?: ReactNode;
}

export const LineStatistic = memo((props: LineStatisticProps) => {
    const { className, title, percent, count, before } = props;

    return (
        <div className={classNames(cls.row, {}, [className])}>
            {before && <div className={cls.cell}>{before}</div>}
            <div className={cls.cell}>{title}</div>
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
