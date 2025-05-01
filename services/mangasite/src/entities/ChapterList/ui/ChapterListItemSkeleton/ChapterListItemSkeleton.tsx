import { FC } from 'react';
import { classNames } from '@packages/model/src/lib/helpers/classNames';
import { HStack } from '@packages/ui/src/shared/Stack';
import Skeleton from 'react-loading-skeleton';
import cls from './ChapterListItemSkeleton.module.scss';

interface ChapterListItemSkeletonProps {
    className?: string;
}

export const ChapterListItemSkeleton: FC<ChapterListItemSkeletonProps> = (props) => {
    const { className } = props;

    return (
        <HStack max className={classNames(cls.ChapterListItemSkeleton, {}, [className])}>
            <HStack justify="start" max flexGrow>
                <Skeleton borderRadius="50%" width={20} height={20} />
                <Skeleton width={180} />
            </HStack>
            <Skeleton width={50} />
        </HStack>
    );
};
