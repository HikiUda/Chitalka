import { ImageIcon } from 'lucide-react';
import { cn } from '@/shared/lib/css';
import { AppAdaptiveImage } from '@/shared/ui/AppAdaptiveImage';
import { Skeleton } from '@/shared/ui/kit/skeleton';

type CoverProps = {
    className?: string;
    cover: string | null;
};

export const Cover = (props: CoverProps) => {
    const { className, cover } = props;
    return (
        <div className={cn('h-full p-0 cursor-pointer shadow-sm ', className)}>
            <AppAdaptiveImage
                img={cover}
                className="relative w-full pb-[134%]"
                loadFallback={<Skeleton className="w-full h-full" />}
            >
                <div className="absolute top-3 right-3 bg-black/70 p-1 rounded-lg z-2 transition-opacity hover:opacity-80">
                    <ImageIcon size={20} className="stroke-primary" />
                </div>
            </AppAdaptiveImage>
        </div>
    );
};
