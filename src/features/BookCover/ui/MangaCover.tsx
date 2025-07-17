import { Suspense } from 'react';
import { Cover } from './Cover';
import { MangaCoversModal } from './MangaCoversModal';
import { Dialog, DialogBody, DialogPortal, DialogTrigger } from '@/shared/ui/kit/dialog';
import { BookIdType } from '@/shared/kernel/book/book';
import { Loader } from '@/shared/ui/kit/loader';

type MangaCoverProps = {
    className?: string;
    mangaId: BookIdType;
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
                <DialogBody className="max-w-120 w-[96vw] " empty>
                    <Suspense fallback={<Loader variant="flower" className="mx-auto w-25" />}>
                        <MangaCoversModal mangaId={mangaId} />
                    </Suspense>
                </DialogBody>
            </DialogPortal>
        </Dialog>
    );
};
