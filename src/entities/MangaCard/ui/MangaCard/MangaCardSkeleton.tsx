import { memo } from 'react';
import { classNames } from '@/shared/lib/helpers/classNames';

import Skeleton from 'react-loading-skeleton';
import cls from './MangaCard.module.scss';
import { MangaCardAdaptive } from './MangaCard';

interface MangaCardProps {
    className?: string;
    adaptive?: MangaCardAdaptive;
}

export const MangaCardSkeleton = memo((props: MangaCardProps) => {
    const { className, adaptive = 'media' } = props;
    return (
        <div className={classNames(cls.MangaCard, {}, [className, cls[adaptive]])}>
            <Skeleton className={cls.img} />
            <Skeleton />
            <Skeleton width={70} />
        </div>
    );
});
