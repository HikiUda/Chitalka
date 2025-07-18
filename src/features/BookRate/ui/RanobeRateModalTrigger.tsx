import { Suspense } from 'react';
import { isMobile } from 'react-device-detect';
import { DialogTitle } from '@radix-ui/react-dialog';
import { useRanobeGetRate } from '../model/useRanobeGetRate';
import { useRanobeSetRate } from '../model/useRanobeSetRate';
import { useRanobeDeleteRate } from '../model/useRanobeDeleteRate';
import { RateModalTriggerButton } from './RateModalTriggerButton';
import { BookId } from '@/shared/kernel/book/book';
import { Dialog, DialogBody } from '@/shared/ui/kit/dialog';
import { lazyNamed } from '@/shared/lib/helpers/lazyNamed';
import { Loader } from '@/shared/ui/kit/loader';

const RateModal = lazyNamed(() => import('./RateModal'), 'RateModal');

type RanobeRateModalTriggerProps = {
    className?: string;
    ranobeId: BookId;
};

export const RanobeRateModalTrigger = (props: RanobeRateModalTriggerProps) => {
    const { className, ranobeId } = props;

    const { data, isLoading } = useRanobeGetRate(ranobeId);
    const { getOptimisticRate, setRate } = useRanobeSetRate(ranobeId);
    const { deleteRate, isDeletePending } = useRanobeDeleteRate(ranobeId);

    const currentRate = getOptimisticRate(data?.rate, isDeletePending);

    return (
        <Dialog>
            <RateModalTriggerButton
                className={className}
                rate={currentRate}
                isLoading={isLoading}
            />
            <DialogBody verticalPosition={isMobile ? 'bottom' : 'center'}>
                <DialogTitle hidden />
                <Suspense fallback={<Loader className="mx-auto" variant="flower" />}>
                    <RateModal rate={currentRate} setRate={setRate} deleteRate={deleteRate} />
                </Suspense>
            </DialogBody>
        </Dialog>
    );
};
