import { useMemo, useState } from 'react';
import { EyeIcon, EyeOffIcon } from 'lucide-react';
import { useGetMangaChapter } from '../../model/useGetMangaChapter';
import { TriggerButton, ChaptersNavigationLayout } from '../layout/ChaptersNavigationLayout';
import { BookChaptersSheetLayout } from '../layout/BookChaptersSheetLayout';
import { useGetMangaChapters } from '../../model/useGetMangaChapters';
import { BookChaptersLayout } from '../layout/BookChaptersLayout';
import { BookIdType } from '@/shared/kernel/book/book';
import { getRoute } from '@/shared/kernel/router';
import { getUrlChapterId } from '@/shared/kernel/book/getUrlCahpterId';
import { useTrottle } from '@/shared/lib/hooks/useTrottle';
import { useIntersection } from '@/shared/lib/hooks/useIntersection';
import { ToggleOrder } from '@/entities/ToggleOrder';
import { ChapterList, ChapterListItem } from '@/entities/ChapterList';
import { Input } from '@/shared/ui/kit/input';

type MangaChaptersNavigationProps = {
    className?: string;
    mangaId: BookIdType;
    chapterId: BookIdType;
};
//TODO lazy import sheet body
export const MangaChaptersNavigation = (props: MangaChaptersNavigationProps) => {
    const { className, mangaId, chapterId } = props;
    const [open, setOpen] = useState(false);
    const { data } = useGetMangaChapter(mangaId, chapterId);
    const {
        chapters = [],
        fetchNextPage,
        isFetching,
        order,
        search,
    } = useGetMangaChapters(mangaId);

    const trottleFetchNextPage = useTrottle(() => fetchNextPage(), 1000);
    const intersect = useIntersection(() => {
        if (!isFetching) trottleFetchNextPage();
    });

    const toPrevChapter = useMemo(() => {
        //TODO replace 0 on tome, chapter
        const { prevChapter } = data;
        if (!prevChapter) return null;
        return getRoute.MANGA_READ(
            mangaId,
            getUrlChapterId(prevChapter.tome, prevChapter.chapter, prevChapter.id),
        );
    }, [data, mangaId]);

    const toNextChapter = useMemo(() => {
        const { nextChapter } = data;
        if (!nextChapter) return null;
        return getRoute.MANGA_READ(
            mangaId,
            getUrlChapterId(nextChapter.tome, nextChapter.chapter, nextChapter.id),
        );
    }, [data, mangaId]);

    return (
        <ChaptersNavigationLayout
            className={className}
            toPrevChapter={toPrevChapter}
            toNextChapter={toNextChapter}
            trigger={
                <BookChaptersSheetLayout
                    open={open}
                    onOpenChange={setOpen}
                    trigger={<TriggerButton tome={data.tome} chapter={data.chapter} />}
                >
                    <BookChaptersLayout
                        order={<ToggleOrder {...order} />}
                        search={
                            <Input className="max-w-80" placeholder="Найти главу" {...search} />
                        }
                        list={
                            <ChapterList
                                chapters={chapters}
                                renderChapter={(chapter) => (
                                    <ChapterListItem
                                        key={chapter.id}
                                        before={
                                            chapter.isUserViewed ? (
                                                <EyeIcon size={15} />
                                            ) : (
                                                <EyeOffIcon size={15} />
                                            )
                                        }
                                        mangaId={mangaId}
                                        chapter={chapter}
                                        onClick={() => setOpen(false)}
                                    />
                                )}
                                isLoading={isFetching}
                                skeletonsCount={30}
                                action={<div className="h-1" ref={intersect} />}
                            />
                        }
                    />
                </BookChaptersSheetLayout>
            }
        />
    );
};
