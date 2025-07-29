import { ReactNode } from 'react';
import { BookHoverCard } from './BookHoverCard';
import { BookId } from '@/shared/kernel/book/book';
import { lazyNamed } from '@/shared/lib/helpers/lazyNamed';

const RanobeHoverCardContent = lazyNamed(
    () => import('./RanobeHoverCardContent'),
    'RanobeHoverCardContent',
);

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
            content={<RanobeHoverCardContent ranobeId={ranobeId} />}
        />
    );
};
