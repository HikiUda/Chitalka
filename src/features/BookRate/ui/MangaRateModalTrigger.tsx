import { Suspense } from 'react';
import { isMobile } from 'react-device-detect';
import { DialogTitle } from '@radix-ui/react-dialog';
import { useMangaGetRate } from '../model/useMangaGetRate';
import { useMangaSetRate } from '../model/useMangaSetRate';
import { useMangaDeleteRate } from '../model/useMangaDeleteRate';
import { RateModalTriggerButton } from './RateModalTriggerButton';
import { BookIdType } from '@/shared/kernel/book/book';
import { Dialog, DialogBody } from '@/shared/ui/kit/dialog';
import { lazyNamed } from '@/shared/lib/helpers/lazyNamed';
import { Loader } from '@/shared/ui/kit/loader';

const RateModal = lazyNamed(() => import('./RateModal'), 'RateModal');

type MangaRateModalTriggerProps = {
    className?: string;
    mangaId: BookIdType;
};

export const MangaRateModalTrigger = (props: MangaRateModalTriggerProps) => {
    const { className, mangaId } = props;

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
            <DialogBody verticalPosition={isMobile ? 'bottom' : 'center'}>
                <DialogTitle hidden>Оценка Манги</DialogTitle>
                <Suspense fallback={<Loader className="mx-auto" variant="flower" />}>
                    <RateModal rate={currentRate} setRate={setRate} deleteRate={deleteRate} />
                </Suspense>
            </DialogBody>
        </Dialog>
    );
};
