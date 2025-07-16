import { BackToBook } from '../layout/BackToBook';
import { useGetMangaChapter } from '../../model/useGetMangaChapter';
import { BookIdType } from '@/shared/kernel/book';
import { getRoute } from '@/shared/kernel/router';

type BackToMangaProps = {
    className?: string;
    mangaId: BookIdType;
    chapterId: BookIdType;
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
