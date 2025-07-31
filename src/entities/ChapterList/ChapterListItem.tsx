import { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { format } from 'date-fns';
import { cn } from '@/shared/lib/css';
import { createI18nModule } from '@/shared/kernel/i18n';

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
    bookLink: string;
    before?: ReactNode;
    after?: ReactNode;
    onClick?: () => void;
};

const { useI18n } = createI18nModule({
    tomeChapter: {
        ru: (...args) => `${args[0]} том ${args[1]} глава`,
        en: (...args) => `${args[0]} tome ${args[1]} chapter`,
    },
});

export const ChapterListItem = (props: ChapterListItemProps) => {
    const { className, chapter, before, after, bookLink, onClick } = props;
    const t = useI18n();

    return (
        <Link
            to={bookLink}
            className={cn(
                'grid grid-cols-[auto_1fr_auto_auto] overflow-hidden px-4 py-2.5 items-center gap-2 hover:bg-accent',
                className,
            )}
            onClick={onClick}
        >
            {before || <div />}
            <div className="whitespace-nowrap overflow-hidden text-ellipsis">
                {`${t('tomeChapter', [chapter.tome, chapter.chapter])}${chapter.title ? ` - ${chapter.title}` : ''}`}
            </div>
            <div>{format(chapter.createdAt, 'dd.mm.yyyy')}</div>
            {after}
        </Link>
    );
};
