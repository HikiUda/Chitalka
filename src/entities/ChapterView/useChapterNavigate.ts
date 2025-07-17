import { useNavigate } from 'react-router-dom';
import { useCallback, useMemo } from 'react';
import { ChapterType } from '../api/chapterApi/chapterScheme';
import { getRoute } from '@/shared/kernel/router';
import { BookIdType } from '@/shared/kernel/book/book';
import { getUrlChapterId } from '@/entities/ChapterList';

export function useChapterNavigate(mangaId: BookIdType, data?: ChapterType) {
    const navigate = useNavigate();
    const prevChapter = useMemo(() => {
        if (!data || !data.prevChapterId) return null;
        return `${getRoute.MANGA_READ(
            mangaId,
            getUrlChapterId(data.tome, data?.chapter, data.prevChapterId),
        )}?page=last`;
    }, [data, mangaId]);
    const nextChapter = useMemo(() => {
        if (!data || !data.nextChapterId) return null;
        return getRoute.MANGA_READ(
            mangaId,
            getUrlChapterId(data.tome, data?.chapter, data.nextChapterId),
        );
    }, [data, mangaId]);

    const toPrevChapter = useCallback(() => {
        if (prevChapter) navigate(prevChapter);
    }, [navigate, prevChapter]);

    const toNextChapter = useCallback(() => {
        if (nextChapter) navigate(nextChapter);
    }, [navigate, nextChapter]);

    const toManga = useCallback(() => {
        navigate(getRoute.MANGA(mangaId));
    }, [mangaId, navigate]);

    return {
        prevChapter,
        nextChapter,
        toPrevChapter: prevChapter === null ? null : toPrevChapter,
        toNextChapter: nextChapter === null ? null : toNextChapter,
        toManga,
    };
}
