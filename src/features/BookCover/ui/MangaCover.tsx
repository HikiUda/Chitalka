import { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { Cover } from './Cover';
import { MangaCoversModal } from './MangaCoversModal';
import {
    Dialog,
    DialogContent,
    DialogPortal,
    DialogTitle,
    DialogTrigger,
} from '@/shared/ui/kit/dialog';
import { BookId } from '@/shared/kernel/book/book';
import { Loader } from '@/shared/ui/kit/loader';
import { AppAdaptiveImage } from '@/shared/ui/AppAdaptiveImage';
import { Skeleton } from '@/shared/ui/kit/skeleton';

type MangaCoverProps = {
    className?: string;
    mangaId: BookId;
    cover: string | null;
};

// TODO ErrorBoundary
export const MangaCover = (props: MangaCoverProps) => {
    const { className, mangaId, cover } = props;

    return (
        <Dialog>
            <DialogTrigger className={className}>
                <Cover cover={cover} />
            </DialogTrigger>
            <DialogPortal>
                <DialogContent className="max-w-120 w-[96vw] " empty>
                    <DialogTitle hidden />
                    <ErrorBoundary
                        fallback={
                            <AppAdaptiveImage
                                img={null}
                                className="relative w-full pb-[134%]"
                                loadFallback={<Skeleton className="w-full h-full" />}
                            />
                        }
                    >
                        <Suspense fallback={<Loader variant="flower" className="mx-auto w-25" />}>
                            <MangaCoversModal mangaId={mangaId} />
                        </Suspense>
                    </ErrorBoundary>
                </DialogContent>
            </DialogPortal>
        </Dialog>
    );
};
