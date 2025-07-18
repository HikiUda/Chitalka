import { BackToBook } from '../layout/BackToBook';
import { useGetMangaChapter } from '../../model/useGetMangaChapter';
import { BookId } from '@/shared/kernel/book/book';
import { getRoute } from '@/shared/kernel/router';

type BackToMangaProps = {
    className?: string;
    mangaId: BookId;
    chapterId: BookId;
};

export const BackToManga = (props: BackToMangaProps) => {
    const { className, mangaId, chapterId } = props;
    const { data } = useGetMangaChapter(mangaId, chapterId);
    return (
        <BackToBook
            className={className}
            bookLink={`${getRoute.MANGA(mangaId)}?section=chapters`}
            bookTitle={data.bookTitle}
            chapterTitle={data.title}
        />
    );
};
