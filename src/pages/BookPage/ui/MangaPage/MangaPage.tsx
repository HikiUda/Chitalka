import { useParams } from 'react-router-dom';
import { BookPageLayout } from '../layout/BookPageLayout';
import { BookTitleLayout } from '../layout/BookTitleLayout';
import { TitleInfoModal } from '../layout/TitleInfoModal';
import { BookRateLayout } from '../layout/BookRateLayout';
import { useMangaPageContent } from '../../model/useMangaPageContent';
import { BookContentLayout } from '../layout/BookContentLayout';
import { Banner } from '@/entities/Banner';
import { MangaCover } from '@/features/BookCover';
import { cn } from '@/shared/lib/css';
import { MangaContinueReadButton } from '@/features/BookContinueRead';
import { MangaBookmarkSelector } from '@/features/BookToBookmarks';
import { MangaRateModalTrigger } from '@/features/BookRate';
import { useMangaBasicInfo, useBookTitles, useGetManga } from '@/entities/BookInfo';
import { lazyNamed } from '@/shared/lib/helpers/lazyNamed';
import { PathParams, Routes } from '@/shared/kernel/router';
import { useWindowSize } from '@/shared/kernel/useWindowSize';

const BookSidebarLayout = lazyNamed(
    () => import('../layout/BookSidebarLayout'),
    'BookSidebarLayout',
);

export const MangaPage = () => {
    const { mangaId } = useParams<PathParams[typeof Routes.MANGA]>();
    const isWidthLg = useWindowSize.use.isWidthLg();
    if (!mangaId) throw new Error('mangaId is required');

    const { manga } = useGetManga(mangaId);
    const mangaContent = useMangaPageContent(mangaId);
    const mangaTitles = useBookTitles(manga);
    const { basicInfo } = useMangaBasicInfo(manga);

    //TODO loading end error state

    return (
        <BookPageLayout
            banner={(BannerSlot) =>
                (manga.banner || !isWidthLg) && (
                    <BannerSlot asChild>
                        <Banner banner={manga.banner || manga.cover} />
                    </BannerSlot>
                )
            }
            cover={(CoverSlot) => (
                <CoverSlot asChild>
                    <MangaCover
                        mangaId={manga.id}
                        cover={manga.cover}
                        className={cn(!isWidthLg && 'w-45')}
                    />
                </CoverSlot>
            )}
            title={(TitleSlot) => (
                <TitleSlot>
                    <TitleInfoModal
                        titles={mangaTitles.titles}
                        otherTitles={mangaTitles.otherTitles}
                    >
                        <BookTitleLayout title={mangaTitles.main} subtitle={mangaTitles.subtitle} />
                    </TitleInfoModal>
                    <BookRateLayout
                        rate={manga.rate}
                        countRate={manga.rateCount}
                        rateButton={<MangaRateModalTrigger mangaId={manga.id} />}
                    />
                </TitleSlot>
            )}
            buttons={(ButtonsSlot) => (
                <ButtonsSlot>
                    <MangaContinueReadButton mangaId={manga.id} className="w-full" />
                    <MangaBookmarkSelector className="w-full" mangaId={manga.id} />
                </ButtonsSlot>
            )}
            sidebar={
                <BookSidebarLayout basicInfo={basicInfo} otherTitles={mangaTitles.otherTitles} />
            }
            content={<BookContentLayout {...mangaContent} />}
        />
    );
};
