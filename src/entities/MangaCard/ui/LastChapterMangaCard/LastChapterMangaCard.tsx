import { memo } from 'react';
import { getRoute } from '@/shared/config/router/routerConfig';
import { MangaCard } from '../MangaCard/MangaCard';
import { MangaListItemLastUpdatedType } from '@/shared/api/mangaList';
import { getUrlChapterId } from '@/entities/ChapterList';

interface LastChapterMangaCardProps {
    className?: string;
    manga: MangaListItemLastUpdatedType;
}

export const LastChapterMangaCard = memo((props: LastChapterMangaCardProps) => {
    const { className, manga } = props;
    //TODO link to manga chapter
    return (
        <MangaCard
            className={className}
            title={manga.title}
            subtitle={manga.type}
            label3={'Глава ' + manga.chapter}
            img={manga.cover}
            to={getRoute.readChapter(
                manga.urlId,
                getUrlChapterId(manga.tome, manga.chapter, manga.chapterId),
            )}
        />
    );
});
