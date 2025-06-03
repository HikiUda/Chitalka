import { memo } from 'react';
import { MangaCardInline } from '../MangaCardInline/MangaCardInline';
import cls from './LastUpdatedMangaCardInline.module.scss';
import { getTimeRelativeNow } from '@/shared/lib/helpers/dateFormat';
import { getRoute } from '@/shared/kernel/router/routerConfig';
import { MangaListItemLastUpdatedType } from '@/shared/api/deprecated/mangaList';
import { getUrlChapterId } from '@/entities/ChapterList';

interface LastUpdatedMangaCardInlineProps {
    className?: string;
    manga: MangaListItemLastUpdatedType;
}

export const LastUpdatedMangaCardInline = memo((props: LastUpdatedMangaCardInlineProps) => {
    const { className, manga } = props;
    return (
        <MangaCardInline
            className={className}
            title={manga.title}
            to={getRoute.MANGA_READ(
                manga.urlId,
                getUrlChapterId(manga.tome, manga.chapter, manga.chapterId),
            )}
            img={manga.cover}
        >
            <span className={cls.charecter}>
                Tome {manga.tome} Chapter {manga.chapter}
            </span>
            <span className={cls.time}>{getTimeRelativeNow(new Date(manga.chapterCreatedAt))}</span>
        </MangaCardInline>
    );
});
