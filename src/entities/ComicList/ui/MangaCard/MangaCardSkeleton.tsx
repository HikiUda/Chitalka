import { VariantProps } from 'class-variance-authority';
import { mangaCardVariants } from './MangaCard';
import { Skeleton } from '@/shared/ui/kit/skeleton';
import { cn } from '@/shared/lib/css';

type MangaCardProps = {
    className?: string;
} & VariantProps<typeof mangaCardVariants>;

export const MangaCardSkeleton = (props: MangaCardProps) => {
    const { className, adaptive } = props;
    return (
        <div className={cn(mangaCardVariants({ adaptive }), className)}>
            <Skeleton className="w-full pb-[141%] mb-1" />
            <Skeleton className="w-full h-4 mb-1" />
            <Skeleton className="w-full h-3" />
        </div>
    );
};
