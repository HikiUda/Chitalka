import { useMangaGetBookmark } from '../model/useMangaGetBookmark';
import { useMangaSetBookmark } from '../model/useMangaSetBookmark';
import { useMangaDeleteBookmark } from '../model/useMangaDeleteBookmark';
import { BookmarkSelector } from './BookmarkSelector';
import { BookIdType } from '@/shared/kernel/book';

type MangaBookmarkSelectorProps = {
    className?: string;
    mangaId: BookIdType;
};

export const MangaBookmarkSelector = (props: MangaBookmarkSelectorProps) => {
    const { className, mangaId } = props;

    const { data, isLoading } = useMangaGetBookmark(mangaId);
    const { setBookmark, getOptimisticBookmark } = useMangaSetBookmark(mangaId);
    const { deleteBookmark, isDeletePending } = useMangaDeleteBookmark(mangaId);

    const bookmark = getOptimisticBookmark(data?.bookmark, isDeletePending);

    return (
        <BookmarkSelector
            className={className}
            bookmark={bookmark}
            isLoading={isLoading}
            setBookmark={setBookmark}
            deleteBookmark={deleteBookmark}
        />
    );
};
