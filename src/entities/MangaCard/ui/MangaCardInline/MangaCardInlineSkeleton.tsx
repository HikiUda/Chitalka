import { memo } from 'react';
import { classNames } from '@/shared/lib/helpers/classNames';
import Skeleton from 'react-loading-skeleton';

import { getFlex } from '@/shared/ui/Stack';
import cls from './MangaCardInline.module.scss';

interface MangaCardInlineSkeletonProps {
    className?: string;
}

export const MangaCardInlineSkeleton = memo((props: MangaCardInlineSkeletonProps) => {
    const { className } = props;

    return (
        <div className={classNames(cls.MangaCardInline, {}, [className])}>
            <Skeleton width={60} height="100%" />
            <div
                className={getFlex({
                    justify: 'start',
                    direction: 'column',
                    align: 'stretch',
                    flexGrow: true,
                    gap: '4',
                })}
            >
                <Skeleton />
                <Skeleton width={100} />
                <Skeleton width="100%" containerClassName={cls.skeletonContainer} height="100%" />
            </div>
        </div>
    );
});
