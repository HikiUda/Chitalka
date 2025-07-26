import { memo, Suspense } from 'react';
import { DialogTitle } from '@radix-ui/react-dialog';
import { useMangaGetRate } from '../model/useMangaGetRate';
import { useMangaSetRate } from '../model/useMangaSetRate';
import { useMangaDeleteRate } from '../model/useMangaDeleteRate';
import { RateModalTriggerButton } from './RateModalTriggerButton';
import { BookId } from '@/shared/kernel/book/book';
import { Dialog, DialogContent } from '@/shared/ui/kit/dialog';
import { lazyNamed } from '@/shared/lib/helpers/lazyNamed';
import { Loader } from '@/shared/ui/kit/loader';
import { useWindowSize } from '@/shared/kernel/useWindowSize';

const RateModal = lazyNamed(() => import('./RateModal'), 'RateModal');

type MangaRateModalTriggerProps = {
    className?: string;
    mangaId: BookId;
};

export const MangaRateModalTrigger = memo((props: MangaRateModalTriggerProps) => {
    const { className, mangaId } = props;
    const isWidthLg = useWindowSize.use.isWidthLg();
    const { data, isLoading } = useMangaGetRate(mangaId);
    const { getOptimisticRate, setRate } = useMangaSetRate(mangaId);
    const { deleteRate, isDeletePending } = useMangaDeleteRate(mangaId);

    const currentRate = getOptimisticRate(data?.rate, isDeletePending);

    return (
        <Dialog>
            <RateModalTriggerButton
                className={className}
                rate={currentRate}
                isLoading={isLoading}
            />
            <DialogContent verticalPosition={!isWidthLg ? 'bottom' : 'center'}>
                <DialogTitle hidden />
                <Suspense fallback={<Loader className="mx-auto" variant="flower" />}>
                    <RateModal rate={currentRate} setRate={setRate} deleteRate={deleteRate} />
                </Suspense>
            </DialogContent>
        </Dialog>
    );
});
MangaRateModalTrigger.displayName = 'MangaRateModalTrigger';
