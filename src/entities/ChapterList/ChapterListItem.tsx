import { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { ru } from 'date-fns/locale';
import { format } from 'date-fns';
import { BookId } from '@/shared/kernel/book/book';
import { getRoute } from '@/shared/kernel/router';
import { cn } from '@/shared/lib/css';

type ChapterListItem = {
    id: number;
    title: string | null;
    tome: number;
    chapter: number;
    createdAt: Date;
};

type ChapterListItemProps = {
    className?: string;
    chapter: ChapterListItem;
    mangaId: BookId;
    before?: ReactNode;
    after?: ReactNode;
    onClick?: () => void;
};

export const ChapterListItem = (props: ChapterListItemProps) => {
    const { className, chapter, before, after, mangaId, onClick } = props;

    return (
        <Link
            to={getRoute.MANGA_READ(mangaId, { ...chapter, chapterId: chapter.id })}
            className={cn(
                'grid grid-cols-[auto_1fr_auto_auto] overflow-hidden px-4 py-2.5 items-center gap-2 hover:bg-accent',
                className,
            )}
            onClick={onClick}
        >
            {before || <div />}
            <div className="whitespace-nowrap overflow-hidden text-ellipsis">
                {`${chapter.tome} том ${chapter.chapter} глава${chapter.title ? ` - ${chapter.title}` : ''}`}
            </div>
            <div>{format(chapter.createdAt, 'dd.mm.yyyy', { locale: ru })}</div>
            {after}
        </Link>
    );
};
