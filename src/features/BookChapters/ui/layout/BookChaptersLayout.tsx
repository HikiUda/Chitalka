import { ReactNode } from 'react';
import { Slot } from '@radix-ui/react-slot';
import { Separator } from '@/shared/ui/kit/separator';
import { cn } from '@/shared/lib/css';

interface BookChaptersLayoutProps {
    className?: string;
    order: ReactNode;
    search: ReactNode;
    list: ReactNode;
}

export const BookChaptersLayout = (props: BookChaptersLayoutProps) => {
    const { className, order, search, list } = props;

    return (
        <div className={cn('h-full flex flex-col', className)}>
            <div className="flex justify-between items-center gap-2 flex-wrap px-2.5 mb-4">
                {order}
                {search}
            </div>
            <Separator />
            <Slot className="overflow-auto">{list}</Slot>
        </div>
    );
};
