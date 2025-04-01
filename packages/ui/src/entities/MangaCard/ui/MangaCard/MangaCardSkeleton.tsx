import { memo } from 'react';
import { classNames } from '@packages/model/src/lib/classNames';

import Skeleton from 'react-loading-skeleton';
import cls from './MangaCard.module.scss';

interface MangaCardProps {
    className?: string;
}

export const MangaCardSkeleton = memo((props: MangaCardProps) => {
    const { className } = props;
    return (
        <div className={classNames(cls.MangaCard, {}, [className, cls.media])}>
            <Skeleton className={cls.img} />
            <Skeleton />
            <Skeleton width={70} />
        </div>
    );
});
