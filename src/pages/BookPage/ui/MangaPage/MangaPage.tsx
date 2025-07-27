import { useParams } from 'react-router-dom';
import { BookPage } from '../layout/BookPage';
import { BookTitle } from '../layout/BookTitle';
import { BookRating } from '../layout/BookRating';
import { useMangaPageContent } from '../../model/useMangaPageContent';
import { BookContent } from '../layout/BookContent';
import { MangaCover } from '@/features/BookCover';
import { MangaContinueReadButton } from '@/features/BookContinueRead';
import { MangaBookmarkSelector } from '@/features/BookToBookmarks';
import { MangaRateModalTrigger } from '@/features/BookRate';
import { useMangaBasicInfo, useBookTitles, useGetManga } from '@/entities/BookInfo';
import { lazyNamed } from '@/shared/lib/helpers/lazyNamed';
import { PathParams, Routes } from '@/shared/kernel/router';

const BookSidebar = lazyNamed(() => import('../layout/BookSidebar'), 'BookSidebar');
const TitleInfo = lazyNamed(() => import('../layout/TitleInfo'), 'TitleInfo');

export const MangaPage = () => {
    const { mangaId } = useParams<PathParams[typeof Routes.MANGA]>();
    if (!mangaId) throw new Error('mangaId is required');

    const { manga } = useGetManga(mangaId);
    const mangaContent = useMangaPageContent(mangaId);
    const mangaTitles = useBookTitles(manga);
    const { basicInfo } = useMangaBasicInfo(manga);
    //TODO loading end error state

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
            content={<BookContent {...mangaContent} />}
        />
    );
};
