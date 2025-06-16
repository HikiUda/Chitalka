import { ReactNode, useMemo } from 'react';
import { BookCardInlineSkeleton } from '../BookCardInline/BookCardInlineSkeleton';
import { cn } from '@/shared/lib/css';

interface BookListLayoutProps<T extends object> {
    className?: string;
    list: T[];
    renderItem: (item: T, ind: number) => ReactNode;
    isLoading?: boolean;
    skeletonsCount?: number;
    skeletonClassName?: string;
    heading?: ReactNode;
    action?: ReactNode;
}

export const BookListLayout = <T extends object>(props: BookListLayoutProps<T>) => {
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
            .map((sk, ind) => <BookCardInlineSkeleton key={ind} className={skeletonClassName} />);
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
