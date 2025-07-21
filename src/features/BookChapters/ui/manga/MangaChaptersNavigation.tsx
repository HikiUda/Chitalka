import { useMangaGetChapter } from '../../model/manga/useMangaGetChapter';
import { ChaptersNavigationLayout } from '../layout/ChaptersNavigationLayout';
import { MangaChaptersSheet } from './MangaChaptersSheet';
import { BookId } from '@/shared/kernel/book/book';
import { getRoute } from '@/shared/kernel/router';

type MangaChaptersNavigationProps = {
    className?: string;
    mangaId: BookId;
    chapterId: BookId;
};

export const MangaChaptersNavigation = (props: MangaChaptersNavigationProps) => {
    const { className, mangaId, chapterId } = props;
    const { data } = useMangaGetChapter(mangaId, chapterId);

    const toPrevChapter = data.prevChapter && getRoute.MANGA_READ(mangaId, data.prevChapter);
    const toNextChapter = data.nextChapter && getRoute.MANGA_READ(mangaId, data.nextChapter);

    return (
        <ChaptersNavigationLayout
            className={className}
            toPrevChapter={toPrevChapter}
            toNextChapter={toNextChapter}
        >
            <MangaChaptersSheet
                mangaId={mangaId}
                className="hover:bg-accent transition-colors h-full px-2"
            />
        </ChaptersNavigationLayout>
    );
};
