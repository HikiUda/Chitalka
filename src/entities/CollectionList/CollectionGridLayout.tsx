import { ReactNode, useMemo } from 'react';
import { cn } from '@/shared/lib/css';

interface CollectionGridLayoutProps<T extends object> {
    className?: string;
    list: T[];
    renderItem: (item: T, index?: number) => ReactNode;
    isLoading?: boolean;
    skeletonsNumber?: number;
    heading?: ReactNode;
    action?: ReactNode;
}

export const CollectionGridLayout = <T extends object>(props: CollectionGridLayoutProps<T>) => {
    const { className, list, renderItem, isLoading, skeletonsNumber = 20, heading, action } = props;

    const skeletons = useMemo(() => {
        return Array(skeletonsNumber)
            .fill(0)
            .map((item, ind) => <div key={ind} />);
    }, [skeletonsNumber]);

    return (
        <div className={cn('@container', className)}>
            {heading}
            <div className="grid gap-4 grid-cols-1 @lg:grid-cols-2 @3xl:grid-cols-3  @5xl:grid-cols-4">
                {list.map(renderItem)}
                {isLoading && skeletons.map((sk) => sk)}
            </div>
            {action}
        </div>
    );
};
