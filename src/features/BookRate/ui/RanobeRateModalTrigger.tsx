import { Suspense } from 'react';
import { DialogTitle } from '@radix-ui/react-dialog';
import { useRanobeGetRate } from '../model/useRanobeGetRate';
import { useRanobeSetRate } from '../model/useRanobeSetRate';
import { useRanobeDeleteRate } from '../model/useRanobeDeleteRate';
import { RateModalTriggerButton } from './RateModalTriggerButton';
import { BookId } from '@/shared/kernel/book/book';
import { Dialog, DialogContent } from '@/shared/ui/kit/dialog';
import { lazyNamed } from '@/shared/lib/helpers/lazyNamed';
import { Loader } from '@/shared/ui/kit/loader';
import { useWindowSize } from '@/shared/kernel/useWindowSize';

const RateModal = lazyNamed(() => import('./RateModal'), 'RateModal');

type RanobeRateModalTriggerProps = {
    className?: string;
    ranobeId: BookId;
};

export const RanobeRateModalTrigger = (props: RanobeRateModalTriggerProps) => {
    const { className, ranobeId } = props;
    const isWidthLg = useWindowSize.use.isWidthLg();
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
            <DialogContent verticalPosition={!isWidthLg ? 'bottom' : 'center'}>
                <DialogTitle hidden />
                <Suspense fallback={<Loader className="mx-auto" variant="flower" />}>
                    <RateModal rate={currentRate} setRate={setRate} deleteRate={deleteRate} />
                </Suspense>
            </DialogContent>
        </Dialog>
    );
};
