import { VariantProps } from 'class-variance-authority';
import { bookCardVariants } from './BookCard';
import { Skeleton } from '@/shared/ui/kit/skeleton';
import { cn } from '@/shared/lib/css';

type BookCardProps = {
    className?: string;
} & VariantProps<typeof bookCardVariants>;

export const BookCardSkeleton = (props: BookCardProps) => {
    const { className, adaptive } = props;
    return (
        <div className={cn(bookCardVariants({ adaptive }), className)}>
            <Skeleton className="w-full pb-[141%] mb-1" />
            <Skeleton className="w-full h-4 mb-1" />
            <Skeleton className="w-full h-3" />
        </div>
    );
};
