import { Suspense } from 'react';
import { Cover } from './Cover';
import { RanobeCoversModal } from './RanobeCoversModal';
import { Dialog, DialogBody, DialogPortal, DialogTrigger } from '@/shared/ui/kit/dialog';
import { BookIdType } from '@/shared/kernel/book/book';
import { Loader } from '@/shared/ui/kit/loader';

type RanobeCoverProps = {
    className?: string;
    ranobeId: BookIdType;
    cover: string | null;
};

// TODO ErrorBoundary
export const RanobeCover = (props: RanobeCoverProps) => {
    const { className, ranobeId, cover } = props;

    return (
        <Dialog>
            <DialogTrigger className={className}>
                <Cover cover={cover} />
            </DialogTrigger>
            <DialogPortal>
                <DialogBody className="max-w-120 w-[96vw] " empty>
                    <Suspense fallback={<Loader variant="flower" className="mx-auto w-25" />}>
                        <RanobeCoversModal ranobeId={ranobeId} />
                    </Suspense>
                </DialogBody>
            </DialogPortal>
        </Dialog>
    );
};
