import { BackToBook } from '../layout/BackToBook';
import { useGetMangaChapter } from '../../model/useGetMangaChapter';
import { MangaIdType } from '@/shared/kernel/book';
import { getRoute } from '@/shared/kernel/router';

type BackToMangaProps = {
    className?: string;
    mangaId: MangaIdType;
    chapterId: MangaIdType;
};

export const BackToManga = (props: BackToMangaProps) => {
    const { className, mangaId, chapterId } = props;
    const { data } = useGetMangaChapter(chapterId);
    return (
        <BackToBook
            className={className}
            bookLink={`${getRoute.MANGA(mangaId)}?section=chapters`}
            bookTitle={data.mangaTitle}
            chapterTitle={data.title}
        />
    );
};
