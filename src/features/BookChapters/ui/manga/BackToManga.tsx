import { BackToBook } from '../layout/BackToBook';
import { useMangaGetChapter } from '../../model/manga/useMangaGetChapter';
import { BookId } from '@/shared/kernel/book/book';
import { getRoute } from '@/shared/kernel/router';

type BackToMangaProps = {
    className?: string;
    mangaId: BookId;
    chapterId: BookId;
};

export const BackToManga = (props: BackToMangaProps) => {
    const { className, mangaId, chapterId } = props;
    const { data } = useMangaGetChapter(mangaId, chapterId);
    return (
        <BackToBook
            className={className}
            bookLink={`${getRoute.MANGA(mangaId)}?section=chapters`}
            bookTitle={data.bookTitle}
            chapterTitle={`${data.tome} tome ${data.chapter} chapter`}
        />
    );
};
