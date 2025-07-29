import { useMangaGetBookmark } from '../model/useMangaGetBookmark';
import { useMangaSetBookmark } from '../model/useMangaSetBookmark';
import { QuickChapterBookmark } from './QuickChapterBookmark';
import { BookId } from '@/shared/kernel/book/book';

type MangaQuickChapterBookmarkProps = {
    className?: string;
    mangaId: BookId;
    chapterId: number | null;
};

export const MangaQuickChapterBookmark = (props: MangaQuickChapterBookmarkProps) => {
    const { className, mangaId, chapterId } = props;

    const { data } = useMangaGetBookmark(mangaId);
    const { setBookmark } = useMangaSetBookmark(mangaId);

    return (
        <QuickChapterBookmark
            className={className}
            bookmarkChapterId={data?.chapterId || null}
            chapterId={chapterId}
            setBookmark={setBookmark}
        />
    );
};
