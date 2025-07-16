import { useMangaGetBookmark } from '../model/useMangaGetBookmark';
import { useMangaSetBookmark } from '../model/useMangaSetBookmark';
import { QuickBookmark } from './QuickBookmark';
import { BookIdType } from '@/shared/kernel/book';

type MangaQuickBookmarkProps = {
    className?: string;
    mangaId: BookIdType;
    chapterId: number | null;
};

export const MangaQuickBookmark = (props: MangaQuickBookmarkProps) => {
    const { className, mangaId, chapterId } = props;

    const { data } = useMangaGetBookmark(mangaId);
    const { setBookmark } = useMangaSetBookmark(mangaId);

    return (
        <QuickBookmark
            className={className}
            bookmarkChapterId={data?.chapterId || null}
            chapterId={chapterId}
            setBookmark={setBookmark}
        />
    );
};
