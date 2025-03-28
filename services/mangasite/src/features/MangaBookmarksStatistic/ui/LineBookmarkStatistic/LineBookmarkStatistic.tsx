import { memo } from 'react';
import { HStack } from '@packages/ui/src/shared/Stack';
import { ProgressBar } from '@packages/ui/src/shared/ProgressBar';
import cls from './LineBookmarkStatistic.module.scss';

interface LineBookmarkStatisticProps {
    className?: string;
}

export const LineBookmarkStatistic = memo((props: LineBookmarkStatisticProps) => {
    const { className } = props;

    return (
        <HStack max justify="start">
            <span>Читаю</span>
            <ProgressBar valueVisible={false} className={cls.max} value={50} />
            <span>50%</span>
            <span className={cls.count}>545</span>
        </HStack>
    );
});
