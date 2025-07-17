import { useRanobeGetCovers } from '../model/useRanobeGetCovers';
import { BookIdType } from '@/shared/kernel/book/book';
import { lazyNamed } from '@/shared/lib/helpers/lazyNamed';

const CoversModal = lazyNamed(() => import('./CoversModal'), 'CoversModal');

type RanobeCoversModalProps = {
    ranobeId: BookIdType;
};

export const RanobeCoversModal = (props: RanobeCoversModalProps) => {
    const { ranobeId } = props;
    const { covers } = useRanobeGetCovers(ranobeId);
    return <CoversModal covers={covers} />;
};
