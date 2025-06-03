import { FC, ReactNode } from 'react';
import { getUrlChapterId } from '../../model/helpers/getUrlCahpterId';
import cls from './ChapterListItem.module.scss';
import { classNames } from '@/shared/lib/helpers/classNames';
import { toShortDate } from '@/shared/lib/helpers/dateFormat';
import { AppLink } from '@/shared/deprecate-ui/AppLink';
import { MangaIdType } from '@/shared/kernel/manga';
import { getRoute } from '@/shared/kernel/router';

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
}

export const ChapterListItem: FC<ChapterListItemProps> = (props) => {
    const { className, chapter, before, after, mangaId } = props;

    return (
        <AppLink
            backgroundOnHover
            noOpacityHover
            to={getRoute.MANGA_READ(
                mangaId,
                getUrlChapterId(chapter.tome, chapter.chapter, chapter.id),
            )}
            className={classNames(cls.ChapterListItem, {}, [className])}
        >
            {before || <div />}
            <div className={cls.chapter}>
                {`${chapter.tome} том ${chapter.chapter} глава${chapter.title ? ` - ${chapter.title}` : ''}`}
            </div>
            <div>{toShortDate(chapter.createdAt)}</div>
            {after}
        </AppLink>
    );
};
