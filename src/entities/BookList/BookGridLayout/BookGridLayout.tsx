import { ReactNode, useMemo } from 'react';
import { BookCardSkeleton } from '../BookCard/BookCardSkeleton';
import { cn } from '@/shared/lib/css';

interface BookGridLayoutProps<T extends object> {
    className?: string;
    list: T[];
    renderItem: (item: T, index?: number) => ReactNode;
    isLoading?: boolean;
    skeletonsNumber?: number;
    action?: ReactNode;
}

export const BookGridLayout = <T extends object>(props: BookGridLayoutProps<T>) => {
    const { className, list, renderItem, isLoading, skeletonsNumber = 20, action } = props;

    const skeletons = useMemo(() => {
        return Array(skeletonsNumber)
            .fill(0)
            .map((item, ind) => <BookCardSkeleton adaptive="dynamic" key={ind} />);
    }, [skeletonsNumber]);

    return (
        <div className={cn('@container', className)}>
            <div className="grid gap-4 grid-cols-2 @sm:grid-cols-3 @xl:grid-cols-4 @2xl:grid-cols-5 @4xl:grid-cols-6">
                {list.map(renderItem)}
                {isLoading && skeletons.map((sk) => sk)}
            </div>
            {action}
        </div>
    );
};
