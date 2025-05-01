import { memo } from 'react';
import { formatDate } from '@packages/model/src/lib/helpers/formatDate';
import { getMangaSiteRoute } from '@packages/model/src/config/router/mangaSiteRouter';
import { MangaCardInline } from '../MangaCardInline/MangaCardInline';
import cls from './LastUpdatedMangaCardInline.module.scss';
import { MangaListItemLastUpdatedType } from '@/shared/api/mangaList';
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
            to={getMangaSiteRoute.readChapter(
                manga.urlId,
                getUrlChapterId(manga.tome, manga.chapter, manga.chapterId),
            )}
            img={manga.cover}
        >
            <span className={cls.charecter}>
                Tome {manga.tome} Chapter {manga.chapter}
            </span>
            <span className={cls.time}>{formatDate(new Date(manga.chapterCreatedAt))}</span>
        </MangaCardInline>
    );
});
