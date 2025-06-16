import { ReactNode } from 'react';
import { BookHoverCard } from './BookHoverCard';
import { MangaIdType } from '@/shared/kernel/manga';
import { lazyNamed } from '@/shared/lib/helpers/lazyNamed';

const MangaContent = lazyNamed(() => import('./MangaContent'), 'MangaContent');
interface MangaHoverCardProps {
    className?: string;
    trigger?: ReactNode;
    mangaId: MangaIdType;
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
