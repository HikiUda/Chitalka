/* eslint-disable @typescript-eslint/no-unnecessary-type-constraint */
import { ReactNode } from 'react';
import { cn } from '@/shared/lib/css';
import { Heading } from '@/shared/ui/kit/heading';

interface BookMetaItemProps<T> {
    className?: string;
    title: string;
    items: T | T[];
    renderItems: (item: T) => ReactNode;
}

export const BookMetaItem = <T extends unknown>(props: BookMetaItemProps<T>) => {
    const { className, title, items, renderItems } = props;

    return (
        <div className={cn('flex flex-col gap-1', className)}>
            <Heading variant="h5" color="muted">
                {title}
            </Heading>
            {Array.isArray(items) ? (
                <div className="flex flex-wrap gap-2">{items.map(renderItems)}</div>
            ) : (
                renderItems(items)
            )}
        </div>
    );
};
