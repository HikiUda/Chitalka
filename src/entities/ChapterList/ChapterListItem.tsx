import { FC, ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { ru } from 'date-fns/locale';
import { format } from 'date-fns';
import { MangaIdType } from '@/shared/kernel/book';
import { getRoute } from '@/shared/kernel/router';
import { cn } from '@/shared/lib/css';
import { getUrlChapterId } from '@/shared/lib/helpers/getUrlCahpterId';

type ChapterListItem = {
    id: number;
    title: string | null;
    tome: number;
    chapter: number;
    createdAt: Date;
};

interface ChapterListItemProps {
    className?: string;
    chapter: ChapterListItem;
    mangaId: MangaIdType;
    before?: ReactNode;
    after?: ReactNode;
    onClick?: () => void;
}

export const ChapterListItem: FC<ChapterListItemProps> = (props) => {
    const { className, chapter, before, after, mangaId, onClick } = props;

    return (
        <Link
            to={getRoute.MANGA_READ(
                mangaId,
                getUrlChapterId(chapter.tome, chapter.chapter, chapter.id),
            )}
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
