import { useMemo, useState } from 'react';
import { EyeIcon, EyeOffIcon } from 'lucide-react';
import { useGetMangaChapter } from '../../model/useGetMangaChapter';
import { TriggerButton, ChaptersNavigationLayout } from '../layout/ChaptersNavigationLayout';
import { BookChaptersSheetLayout } from '../layout/BookChaptersSheetLayout';
import { useGetMangaChapters } from '../../model/useGetMangaChapters';
import { BookChaptersLayout } from '../layout/BookChaptersLayout';
import { MangaIdType } from '@/shared/kernel/book';
import { getRoute } from '@/shared/kernel/router';
import { getUrlChapterId } from '@/shared/lib/helpers/getUrlCahpterId';
import { useTrottle } from '@/shared/lib/hooks/useTrottle';
import { useIntersection } from '@/shared/lib/hooks/useIntersection';
import { ToggleOrder } from '@/entities/ToggleOrder';
import { ChapterList, ChapterListItem } from '@/entities/ChapterList';
import { Input } from '@/shared/ui/kit/input';

type MangaChaptersNavigationProps = {
    className?: string;
    mangaId: MangaIdType;
    chapterId: MangaIdType;
};
//TODO lazy import sheet body
export const MangaChaptersNavigation = (props: MangaChaptersNavigationProps) => {
    const { className, mangaId, chapterId } = props;
    const [open, setOpen] = useState(false);
    const { data } = useGetMangaChapter(chapterId);
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
