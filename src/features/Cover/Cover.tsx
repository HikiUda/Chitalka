import { ImageIcon } from 'lucide-react';
import { FC, lazy } from 'react';
import { AppAdaptiveImage } from '@/shared/ui/AppAdaptiveImage';
import { Dialog, DialogContent, DialogPortal, DialogTrigger } from '@/shared/ui/kit/dialog';
import { Skeleton } from '@/shared/ui/kit/skeleton';
import { MangaIdType } from '@/shared/kernel/manga';
import { cn } from '@/shared/lib/css';

const CoversModal = lazy(() => import('./CoversModal'));

interface CoverProps {
    className?: string;
    mangaId: MangaIdType;
    cover: string | null;
}

export const Cover: FC<CoverProps> = (props) => {
    const { className, mangaId, cover } = props;

    return (
        <Dialog>
            <DialogTrigger
                data-testid="Cover-Button"
                className={cn('h-full p-0 cursor-pointer shadow-sm ', className)}
            >
                <AppAdaptiveImage
                    img={cover}
                    className="relative w-full pb-[134%]"
                    loadFallback={<Skeleton className="w-full h-full" />}
                >
                    <div className="absolute top-3 right-3 bg-black/70 p-1 rounded-lg z-2 transition-opacity hover:opacity-80">
                        <ImageIcon size={20} className="stroke-primary" />
                    </div>
                </AppAdaptiveImage>
            </DialogTrigger>
            <DialogPortal>
                <DialogContent className="max-w-120 w-[96vw] lg:w-auto" empty>
                    <CoversModal mangaId={mangaId} />
                </DialogContent>
            </DialogPortal>
        </Dialog>
    );
};
