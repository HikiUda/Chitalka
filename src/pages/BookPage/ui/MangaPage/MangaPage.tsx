import { useParams } from 'react-router-dom';
import { isMobile } from 'react-device-detect';
import { BookPageLayout } from '../layout/BookPageLayout';
import { BookTitleLayout } from '../layout/BookTitleLayout';
import { TitleInfoModal } from '../layout/TitleInfoModal';
import { BookRateLayout } from '../layout/BookRateLayout';
import { useMangaPageContent } from '../../model/useMangaPageContent';
import { BookContentLayout } from '../layout/BookContentLayout';
import { Banner } from '@/entities/Banner';
import { Cover } from '@/features/Cover';
import { cn } from '@/shared/lib/css';
import { ContinueReadMangaButton } from '@/features/ContinueReadManga';
import { AddMangaToBookmarks } from '@/features/AddMangaToBookmarks';
import { RateModal } from '@/features/RateModal';
import { useBookBasicInfo, useBookTitles, useGetManga } from '@/entities/BookInfo';
import { lazyNamed } from '@/shared/lib/helpers/lazyNamed';
import { PathParams, Routes } from '@/shared/kernel/router';

const BookSidebarLayout = lazyNamed(
    () => import('../layout/BookSidebarLayout'),
    'BookSidebarLayout',
);

export const MangaPage = () => {
    const { mangaId } = useParams<PathParams[typeof Routes.MANGA]>();
    if (!mangaId) throw new Error('mangaId is required');

    const { manga } = useGetManga(mangaId);
    const mangaContent = useMangaPageContent(mangaId);
    const mangaTitles = useBookTitles(manga);
    const { basicInfo } = useBookBasicInfo(manga);

    //TODO loading end error state

    return (
        <BookPageLayout
            banner={(BannerSlot) =>
                (manga.banner || isMobile) && (
                    <BannerSlot asChild>
                        <Banner banner={manga.banner || manga.cover} />
                    </BannerSlot>
                )
            }
            cover={(CoverSlot) => (
                <CoverSlot asChild>
                    <Cover
                        mangaId={manga.id}
                        cover={manga.cover}
                        className={cn(isMobile && 'w-45')}
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
                        countRate={manga.countRate}
                        rateButton={<RateModal mangaId={manga.id} />}
                    />
                </TitleSlot>
            )}
            buttons={(ButtonsSlot) => (
                <ButtonsSlot>
                    <ContinueReadMangaButton className="w-full" />
                    <AddMangaToBookmarks className="w-full" mangaId={manga.id} />
                </ButtonsSlot>
            )}
            sidebar={
                <BookSidebarLayout basicInfo={basicInfo} otherTitles={mangaTitles.otherTitles} />
            }
            content={<BookContentLayout {...mangaContent} />}
        />
    );
};
