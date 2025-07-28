import { memo } from 'react';
import { AboutBook } from './layout/AboutBook';
import { BookId } from '@/shared/kernel/book/book';
import { MangaBookmarkStatistic, MangaRateStatistic } from '@/features/BookStatistic';
import { TextDisclosure } from '@/shared/ui/kit/text-disclosure';
import { MangaRelatedSlider } from '@/features/BookRelated';
import {
    CategoryCollapsedList,
    useMangaBasicInfo,
    useGetManga,
    useMangaCategories,
    BookBasicInfo,
} from '@/entities/BookInfo';

type AboutMangaProps = {
    className?: string;
    mangaId: BookId;
};

export const AboutManga = memo((props: AboutMangaProps) => {
    const { className, mangaId } = props;
    const { manga } = useGetManga(mangaId);
    const { categories } = useMangaCategories(manga);
    const { basicInfo } = useMangaBasicInfo(manga);

    return (
        <AboutBook
            className={className}
            basicInfo={<BookBasicInfo basicInfo={basicInfo} />}
            description={<TextDisclosure text={manga.description} />}
            categories={<CategoryCollapsedList categories={categories} />}
            relatedBooks={<MangaRelatedSlider mangaId={mangaId} />}
            rateStatistic={<MangaRateStatistic mangaId={mangaId} />}
            bookmarkStatistic={<MangaBookmarkStatistic mangaId={mangaId} />}
        />
    );
});
AboutManga.displayName = 'AboutManga';
