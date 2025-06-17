import { useMemo } from 'react';
import { useGetMangaChapter } from '../../model/useGetMangaChapter';
import { TriggerButton, ChaptersNavigationLayout } from '../layout/ChaptersNavigationLayout';
import { MangaChaptersSheet } from './MangaChaptersSheet';
import { MangaIdType } from '@/shared/kernel/manga';
import { getRoute } from '@/shared/kernel/router';
import { getUrlChapterId } from '@/shared/lib/helpers/getUrlCahpterId';

interface MangaChaptersNavigationProps {
    className?: string;
    mangaId: MangaIdType;
    chapterId: MangaIdType;
}

export const MangaChaptersNavigation = (props: MangaChaptersNavigationProps) => {
    const { className, mangaId, chapterId } = props;
    const { data } = useGetMangaChapter(chapterId);

    const toPrevChapter = useMemo(() => {
        //TODO replace 0 on tome, chapter
        const { prevChapterId } = data;
        if (!prevChapterId) return null;
        return getRoute.MANGA_READ(mangaId, getUrlChapterId(0, 0, prevChapterId));
    }, [data, mangaId]);

    const toNextChapter = useMemo(() => {
        const { nextChapterId } = data;
        if (!nextChapterId) return null;
        return getRoute.MANGA_READ(mangaId, getUrlChapterId(0, 0, nextChapterId));
    }, [data, mangaId]);

    return (
        <ChaptersNavigationLayout
            className={className}
            toPrevChapter={toPrevChapter}
            toNextChapter={toNextChapter}
            trigger={
                <MangaChaptersSheet
                    mangaId={mangaId}
                    trigger={<TriggerButton tome={data.tome} chapter={data.chapter} />}
                />
            }
        />
    );
};
