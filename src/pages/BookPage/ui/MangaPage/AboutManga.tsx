import { FC } from 'react';
import { isMobile } from 'react-device-detect';
import { AboutBookLayout } from '../layout/AboutBookLayout';
import { BookIdType } from '@/shared/kernel/book/book';
import { MangaBookmarksStatistic, MangaRateStatistic } from '@/features/MangaStatistic';
import { TextDisclosure } from '@/shared/ui/kit/text-disclosure';
import { RelatedMangaSlider } from '@/features/RelatedMangaSlider';
import { cn } from '@/shared/lib/css';
import {
    BookBasicInfo,
    CategoryCollapsedList,
    useMangaBasicInfo,
    useGetManga,
    useMangaCategories,
} from '@/entities/BookInfo';
import { Heading } from '@/shared/ui/kit/heading';

interface AboutMangaProps {
    className?: string;
    mangaId: BookIdType;
}

export const AboutManga: FC<AboutMangaProps> = (props) => {
    const { className, mangaId } = props;
    const { manga } = useGetManga(mangaId);
    const { categories } = useMangaCategories(manga);
    const { basicInfo } = useMangaBasicInfo(manga);

    return (
        <AboutBookLayout
            className={className}
            rateStatistic={<MangaRateStatistic mangaId={mangaId} />}
            bookmarkStatistic={<MangaBookmarksStatistic mangaId={mangaId} />}
        >
            {isMobile && <BookBasicInfo basicInfo={basicInfo} />}
            <TextDisclosure text={manga.description} className="px-5" />
            <RelatedMangaSlider
                mangaId={mangaId}
                className={cn(
                    isMobile ? 'w-[100vw] max-w-300' : 'w-[calc(100vw-306px)]  max-w-[925px]',
                )}
                heading={
                    <Heading className="ml-3 mb-2" variant="h3" color="primary">
                        Связаное
                    </Heading>
                }
            />
            <CategoryCollapsedList categories={categories} className="px-5" />
        </AboutBookLayout>
    );
};
