import { useParams } from 'react-router-dom';
import { isMobile } from 'react-device-detect';
import { useGetManga } from './model/useGetManga';
import { MangaPageLayout } from './MangaPageLayout';
import { MangaTitle } from './MangaTitle';
import { MangaPageContent } from './MangaPageContent';
import { TitleInfoModal } from './TitleInfoModal';
import { MangaRate } from './MangaRate';
import { useMangaInfo } from './model/useMangaInfo';
import { useMangaTitles } from './model/useMangaTitles';
import { Page } from '@/shared/layout/Page';
import { Banner } from '@/entities/Banner';
import { Loader } from '@/shared/ui/kit/loader';
import { Cover } from '@/features/Cover';
import { cn } from '@/shared/lib/css';
import { ContinueReadMangaButton } from '@/features/ContinueReadManga';
import { AddMangaToBookmarks } from '@/features/AddMangaToBookmarks';
import { ScopeCopyItems, ScopeLinks } from '@/entities/ScopeItems';

export const MangaPage = () => {
    const { mangaId } = useParams();

    const { data: manga, isLoading } = useGetManga(mangaId || 0);
    const scopeLinks = useMangaInfo(mangaId || 0);
    const { otherTitles, titles } = useMangaTitles(mangaId || 0);
    //TODO thinking about 0
    //TODO loading end error state

    if (isLoading)
        return (
            <Page>
                <Loader variant="flower" />
            </Page>
        );

    if (!manga) return <Page>Manga not Found</Page>;

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
                    <MangaRate rate={manga.rate} countRate={manga.countRate} mangaId={manga.id} />
                </TitleSlot>
            )}
            buttons={(ButtonsSlot) => (
                <ButtonsSlot>
                    <ContinueReadMangaButton className="w-full" />
                    <AddMangaToBookmarks className="w-full" mangaId={mangaId || 0} />
                </ButtonsSlot>
            )}
            sidebar={(SidebarSlot) => (
                <SidebarSlot>
                    {scopeLinks.map((scope, ind) => (
                        <ScopeLinks key={ind} title={scope.title} links={scope.links} />
                    ))}
                    {otherTitles.titles.length && (
                        <ScopeCopyItems title={otherTitles.title} items={otherTitles.titles} />
                    )}
                </SidebarSlot>
            )}
            content={(ContentSlot) => (
                <ContentSlot asChild>
                    <MangaPageContent mangaId={mangaId || 0} />
                </ContentSlot>
            )}
        />
    );
};
