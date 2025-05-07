import { useNavigate } from 'react-router-dom';
import { getMangaSiteRoute } from '@/shared/config/router';
import { MangaIdType } from '@/shared/entities/manga';
import { useCallback, useMemo } from 'react';
import { ChapterType } from '../api/chapterApi/chapterScheme';
import { getUrlChapterId } from '@/entities/ChapterList';

export function useChapterNavigate(mangaId: MangaIdType, data?: ChapterType) {
    const navigate = useNavigate();
    const prevChapter = useMemo(() => {
        if (!data || !data.prevChapterId) return null;
        return `${getMangaSiteRoute.readChapter(
            mangaId,
            getUrlChapterId(data.tome, data?.chapter, data.prevChapterId),
        )}?page=last`;
    }, [data, mangaId]);
    const nextChapter = useMemo(() => {
        if (!data || !data.nextChapterId) return null;
        return getMangaSiteRoute.readChapter(
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
        navigate(getMangaSiteRoute.manga(mangaId));
    }, [mangaId, navigate]);

    return {
        prevChapter,
        nextChapter,
        toPrevChapter: prevChapter === null ? null : toPrevChapter,
        toNextChapter: nextChapter === null ? null : toNextChapter,
        toManga,
    };
}
