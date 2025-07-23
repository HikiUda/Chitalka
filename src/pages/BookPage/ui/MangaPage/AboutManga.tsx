import { FC } from 'react';
import { AboutBookLayout } from '../layout/AboutBookLayout';
import { BookId } from '@/shared/kernel/book/book';
import { MangaBookmarkStatistic, MangaRateStatistic } from '@/features/BookStatistic';
import { TextDisclosure } from '@/shared/ui/kit/text-disclosure';
import { MangaRelatedSlider } from '@/features/BookRelated';
import { cn } from '@/shared/lib/css';
import {
    BookBasicInfo,
    CategoryCollapsedList,
    useMangaBasicInfo,
    useGetManga,
    useMangaCategories,
} from '@/entities/BookInfo';
import { useWindowSize } from '@/shared/kernel/useWindowSize';

interface AboutMangaProps {
    className?: string;
    mangaId: BookId;
}

export const AboutManga: FC<AboutMangaProps> = (props) => {
    const { className, mangaId } = props;
    const isWidthLg = useWindowSize.use.isWidthLg();
    const { manga } = useGetManga(mangaId);
    const { categories } = useMangaCategories(manga);
    const { basicInfo } = useMangaBasicInfo(manga);

    return (
        <AboutBookLayout
            className={className}
            rateStatistic={<MangaRateStatistic mangaId={mangaId} />}
            bookmarkStatistic={<MangaBookmarkStatistic mangaId={mangaId} />}
        >
            {!isWidthLg && <BookBasicInfo basicInfo={basicInfo} />}
            <TextDisclosure text={manga.description} className="px-5" />
            <CategoryCollapsedList categories={categories} className="px-5" />
            <MangaRelatedSlider
                mangaId={mangaId}
                className={cn(
                    !isWidthLg ? 'w-[100vw] max-w-300' : 'w-[calc(100vw-306px)]  max-w-[925px]',
                )}
            />
        </AboutBookLayout>
    );
};
