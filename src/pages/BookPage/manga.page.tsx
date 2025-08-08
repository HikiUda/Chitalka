import { useParams } from 'react-router-dom';
import { BookPage } from './ui/page-layout/BookPage';
import { BookTitle } from './ui/page-layout/BookTitle';
import { BookRating } from './ui/page-layout/BookRating';
import { BookContent } from './ui/page-layout/BookContent';
import { MangaCover } from '@/features/BookCover';
import { MangaContinueReadButton } from '@/features/BookContinueRead';
import { MangaBookmarkSelector } from '@/features/BookBookmarks';
import { MangaRateModalTrigger } from '@/features/BookRate';
import { useMangaBasicInfo, useBookTitles, useGetManga } from '@/entities/BookInfo';
import { lazyNamed } from '@/shared/lib/helpers/lazyNamed';
import { PathParams, Routes } from '@/shared/kernel/router';
import { MangaComments } from '@/features/Comments';

const AboutManga = lazyNamed(() => import('./ui/AboutManga'), 'AboutManga');
const MangaChapters = lazyNamed(() => import('@/features/BookChapters'), 'MangaChapters');

const BookSidebar = lazyNamed(() => import('./ui/page-layout/BookSidebar'), 'BookSidebar');
const TitleInfo = lazyNamed(() => import('./ui/page-layout/TitleInfo'), 'TitleInfo');

export const MangaPage = () => {
    const { mangaId } = useParams<PathParams[typeof Routes.MANGA]>();
    if (!mangaId) throw new Error('mangaId is required');

    const { manga } = useGetManga(mangaId);
    const mangaTitles = useBookTitles(manga);
    const { basicInfo } = useMangaBasicInfo(manga);

    return (
        <BookPage
            banner={manga}
            cover={<MangaCover mangaId={manga.id} cover={manga.cover} className="w-full" />}
            title={
                <BookTitle
                    title={mangaTitles.main}
                    subtitle={mangaTitles.subtitle}
                    titleInfo={
                        <TitleInfo
                            titles={mangaTitles.titles}
                            otherTitles={mangaTitles.otherTitles}
                        />
                    }
                />
            }
            rating={
                <BookRating
                    rate={manga.rate}
                    countRate={manga.rateCount}
                    rateButton={<MangaRateModalTrigger mangaId={manga.id} />}
                />
            }
            buttons={
                <>
                    <MangaContinueReadButton mangaId={manga.id} className="w-full" />
                    <MangaBookmarkSelector className="w-full" mangaId={manga.id} />
                </>
            }
            sidebar={
                <BookSidebar
                    basicInfo={basicInfo}
                    otherTitles={mangaTitles.otherTitles}
                    people={manga.people}
                />
            }
            content={
                <BookContent
                    info={<AboutManga mangaId={manga.id} />}
                    chapters={<MangaChapters mangaId={manga.id} />}
                    comments={<MangaComments className="px-5 pt-2" mangaId={manga.id} />}
                />
            }
        />
    );
};

export const Component = MangaPage;
