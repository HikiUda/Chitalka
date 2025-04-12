import { memo } from 'react';
import { ProgressBar } from '@packages/ui/src/shared/ProgressBar';
import { classNames } from '@packages/model/src/lib/helpers/classNames';
import cls from './LineBookmarkStatistic.module.scss';

interface LineBookmarkStatisticProps {
    className?: string;
    percent?: number;
    count?: number;
    title?: string;
}

export const LineBookmarkStatistic = memo((props: LineBookmarkStatisticProps) => {
    const { className, count, percent, title } = props;

    return (
        <div className={classNames(cls.row, {}, [className])}>
            <span className={cls.cell}>{title}</span>
            <ProgressBar
                valueVisible={false}
                className={classNames(cls.max, {}, [cls.cell])}
                value={percent}
            />
            <span className={cls.cell}>{`${percent}%`}</span>
            <span className={classNames(cls.count, {}, [cls.cell])}>{count}</span>
        </div>
    );
});
