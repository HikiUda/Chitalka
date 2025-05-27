import { useParams } from 'react-router-dom';
import { isMobile } from 'react-device-detect';
import { useGetManga } from '../model/useGetManga';
import { useMangaInfo } from '../model/useMangaInfo';
import { useMangaTitles } from '../model/useMangaTitles';
import { MangaPageLayout } from './MangaPageLayout';
import { MangaTitle } from './MangaTitle/MangaTitle';
import { MangaPageContent } from './MangaPageContent/MangaPageContent';
import { TitleInfoModal } from './MangaTitle/TitleInfoModal';
import { MangaRate } from './MangaTitle/MangaRate';
import { MangaPageSidebar } from './MangaPageSidebar';
import { Banner } from '@/entities/Banner';
import { Cover } from '@/features/Cover';
import { cn } from '@/shared/lib/css';
import { ContinueReadMangaButton } from '@/features/ContinueReadManga';
import { AddMangaToBookmarks } from '@/features/AddMangaToBookmarks';
import { RateModal } from '@/features/RateModal';

export const MangaPage = () => {
    const { mangaId } = useParams();

    const { manga } = useGetManga(mangaId || 0);
    const mangaInfo = useMangaInfo(mangaId || 0);
    const { otherTitles, titles } = useMangaTitles(mangaId || 0);
    //TODO thinking about 0
    //TODO loading end error state

    return (
        <MangaPageLayout
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
                    <TitleInfoModal titles={titles} otherTitles={otherTitles}>
                        <MangaTitle title={manga.title.ru} subtitle={manga.title.en} />
                    </TitleInfoModal>
                    <MangaRate
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
            sidebar={(SidebarSlot) => (
                <SidebarSlot asChild>
                    <MangaPageSidebar info={mangaInfo} otherTitles={otherTitles} />
                </SidebarSlot>
            )}
            content={(ContentSlot) => (
                <ContentSlot>
                    <MangaPageContent mangaId={manga.id} />
                </ContentSlot>
            )}
        />
    );
};
