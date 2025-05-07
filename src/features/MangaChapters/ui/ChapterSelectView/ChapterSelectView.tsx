import { FC, useMemo } from 'react';
import { classNames } from '@/shared/lib/helpers/classNames';
import { MangaIdType } from '@/shared/entities/manga';
import { useQuery } from '@tanstack/react-query';
import { useUrlSearchParams } from '@/shared/lib/hooks/useUrlSearchParams';
import { ChapterApi } from '../../model/api/chapterApi/chapterApi';
import { useChapterNavigate } from '../../model/hooks/useChapterNavigate';
import { useReadSettingsStore } from '../../model/store/readSettingsStore';
import cls from './ChapterSelectView.module.scss';
import { ChapterByPage, ChapterTape } from '@/entities/ChapterView';

interface ChapterSelectViewProps {
    className?: string;
    mangaId: MangaIdType;
    chapterId: MangaIdType;
}

export const ChapterSelectView: FC<ChapterSelectViewProps> = (props) => {
    const { className, mangaId, chapterId } = props;
    const chapterView = useReadSettingsStore.use.chapterView();

    const { data } = useQuery(ChapterApi.getQueryOptions(chapterId));
    const { getSearchParam } = useUrlSearchParams();

    const initialPage = useMemo(() => {
        if (!data) return 0;
        const page = getSearchParam('page');
        if (page === 'last') return data.pages.pageCount - 1;
        if (!isNaN(Number(page))) return Math.max(Number(page) - 1, 0);
        return 0;
    }, [data, getSearchParam]);

    const { toManga, toNextChapter, toPrevChapter } = useChapterNavigate(mangaId, data);

    if (!data) return null;

    return (
        <div className={classNames(cls.ChapterSelectView, {}, [className])}>
            {chapterView === 'byPage' ? (
                <ChapterByPage
                    key={chapterId}
                    data={data.pages}
                    toPrevChapter={toPrevChapter}
                    toNextChapter={toNextChapter}
                    toManga={toManga}
                    initialPage={initialPage}
                />
            ) : (
                <ChapterTape data={data.pages} />
            )}
        </div>
    );
};
