import { FC } from 'react';
import { cn } from '@/shared/lib/css';
import { Skeleton } from '@/shared/ui/kit/skeleton';

interface ChapterListItemSkeletonProps {
    className?: string;
}

export const ChapterListItemSkeleton: FC<ChapterListItemSkeletonProps> = (props) => {
    const { className } = props;

    return (
        <div className={cn('flex items-center justify-center gap-2 w-full px-4 py-2.5', className)}>
            <div className="flex items-center w-full grow-1 gap-1">
                <Skeleton className="rounded-[50%] w-5 h-5 " />
                <Skeleton className="w-full h-4" />
            </div>
            <Skeleton className="w-20 h-4" />
        </div>
    );
};
