import { memo } from 'react';
import { useMangaGetRelated } from '../model/useMangaGetRelated';
import { AboutBook } from './about-book-layout/AboutBook';
import { BookRelatedSlider } from './about-book-layout/BookRelatedSlider';
import { BookId } from '@/shared/kernel/book/book';
import { MangaBookmarkStatistic, MangaRateStatistic } from '@/features/BookStatistic';
import { TextDisclosure } from '@/shared/ui/kit/text-disclosure';
import {
    CategoryCollapsedList,
    useMangaBasicInfo,
    useGetManga,
    useMangaCategories,
    BookBasicInfo,
    BookPeopleList,
} from '@/entities/BookInfo';

type AboutMangaProps = {
    className?: string;
    mangaId: BookId;
};

export const AboutManga = memo((props: AboutMangaProps) => {
    const { className, mangaId } = props;
    const { manga } = useGetManga(mangaId);
    const { mangaRelatedBooks } = useMangaGetRelated(mangaId);
    const { categories } = useMangaCategories(manga);
    const { basicInfo } = useMangaBasicInfo(manga);

    return (
        <AboutBook
            className={className}
            basicInfo={<BookBasicInfo basicInfo={basicInfo} />}
            description={<TextDisclosure text={manga.description} />}
            categories={<CategoryCollapsedList categories={categories} />}
            people={<BookPeopleList people={manga.people} />}
            relatedBooks={<BookRelatedSlider books={mangaRelatedBooks} />}
            rateStatistic={<MangaRateStatistic mangaId={mangaId} />}
            bookmarkStatistic={<MangaBookmarkStatistic mangaId={mangaId} />}
        />
    );
});
AboutManga.displayName = 'AboutManga';
