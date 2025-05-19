import { Skeleton } from '@/shared/ui/kit/skeleton';
import { cn } from '@/shared/lib/css';

interface MangaCardInlineSkeletonProps {
    className?: string;
}

export const MangaCardInlineSkeleton = (props: MangaCardInlineSkeletonProps) => {
    const { className } = props;

    return (
        <div className={cn('flex h-[100px] gap-2.5 w-full py-1 px-2.5', className)}>
            <Skeleton className="w-[65px] h-full" />
            <div className="flex flex-col gap-1 grow justify-around">
                <Skeleton className="max-w-[400px] w-full h-4" />
                <Skeleton className="w-full h-10" />
            </div>
        </div>
    );
};
