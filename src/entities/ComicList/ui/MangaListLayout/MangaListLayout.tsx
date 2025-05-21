import { ReactNode, useMemo } from 'react';
import { MangaCardInlineSkeleton } from '../MangaCardInline/MangaCardInlineSkeleton';
import { cn } from '@/shared/lib/css';

interface MagnaListLayoutProps<T extends object> {
    className?: string;
    list: T[];
    renderItem: (item: T, ind: number) => ReactNode;
    isLoading?: boolean;
    skeletonsCount?: number;
    skeletonClassName?: string;
    heading?: ReactNode;
    action?: ReactNode;
}

export const MangaListLayout = <T extends object>(props: MagnaListLayoutProps<T>) => {
    const {
        className,
        list,
        renderItem,
        isLoading,
        skeletonsCount = 3,
        skeletonClassName,
        heading,
        action,
    } = props;

    const skeletons = useMemo(() => {
        return Array(skeletonsCount)
            .fill(0)
            .map((sk, ind) => <MangaCardInlineSkeleton key={ind} className={skeletonClassName} />);
    }, [skeletonClassName, skeletonsCount]);

    return (
        <div className={cn('flex flex-col w-full', className)}>
            {heading}
            {list.map(renderItem)}
            {isLoading && skeletons.map((sk) => sk)}
            {action}
        </div>
    );
};
