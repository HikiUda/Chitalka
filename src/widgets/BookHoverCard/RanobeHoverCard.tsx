import { ReactNode } from 'react';
import { BookHoverCard } from './BookHoverCard';
import { BookId } from '@/shared/kernel/book/book';
import { lazyNamed } from '@/shared/lib/helpers/lazyNamed';

const RanobeContent = lazyNamed(() => import('./RanobeContent'), 'RanobeContent');

type RanobeHoverCardProps = {
    className?: string;
    trigger?: ReactNode;
    ranobeId: BookId;
};

export const RanobeHoverCard = (props: RanobeHoverCardProps) => {
    const { className, trigger, ranobeId } = props;

    return (
        <BookHoverCard
            className={className}
            trigger={trigger}
            content={<RanobeContent ranobeId={ranobeId} />}
        />
    );
};
