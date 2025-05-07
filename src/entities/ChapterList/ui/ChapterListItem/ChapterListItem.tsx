import { FC, ReactNode } from 'react';
import { classNames } from '@/shared/lib/helpers/classNames';
import { dateToString } from '@/shared/lib/helpers/dateToString';
import { AppLink } from '@/shared/ui/AppLink';
import { MangaIdType } from '@/shared/entities/manga';
import { getMangaSiteRoute } from '@/shared/config/router';
import { getUrlChapterId } from '../../model/helpers/getUrlCahpterId';
import cls from './ChapterListItem.module.scss';

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
            to={getMangaSiteRoute.readChapter(
                mangaId,
                getUrlChapterId(chapter.tome, chapter.chapter, chapter.id),
            )}
            className={classNames(cls.ChapterListItem, {}, [className])}
        >
            {before || <div />}
            <div className={cls.chapter}>
                {`${chapter.tome} том ${chapter.chapter} глава${chapter.title ? ` - ${chapter.title}` : ''}`}
            </div>
            <div>{dateToString(chapter.createdAt)}</div>
            {after}
        </AppLink>
    );
};
