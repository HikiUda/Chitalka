import { ReactNode } from 'react';
import { BookHoverCard } from './BookHoverCard';
import { BookId } from '@/shared/kernel/book/book';
import { lazyNamed } from '@/shared/lib/helpers/lazyNamed';

const MangaContent = lazyNamed(() => import('./MangaContent'), 'MangaContent');

type MangaHoverCardProps = {
    className?: string;
    trigger?: ReactNode;
    mangaId: BookId;
};

export const MangaHoverCard = (props: MangaHoverCardProps) => {
    const { className, trigger, mangaId } = props;

    return (
        <BookHoverCard
            className={className}
            trigger={trigger}
            content={<MangaContent mangaId={mangaId} />}
        />
    );
};
