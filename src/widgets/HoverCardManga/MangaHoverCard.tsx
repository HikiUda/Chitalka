import { ReactNode } from 'react';
import { BookHoverCard } from './BookHoverCard';
import { BookIdType } from '@/shared/kernel/book/book';
import { lazyNamed } from '@/shared/lib/helpers/lazyNamed';

const MangaContent = lazyNamed(() => import('./MangaContent'), 'MangaContent');
interface MangaHoverCardProps {
    className?: string;
    trigger?: ReactNode;
    mangaId: BookIdType;
}

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
