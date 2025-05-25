import { FC } from 'react';
import { useParams } from 'react-router-dom';
import { isMobile } from 'react-device-detect';
import { MangaPageContent } from '../MangaPageContent/MangaPageContent';
import { ButtonBlock } from '../ButtonBlock/ButtonBlock';
import { Sidebar } from '../Sidebar/Sidebar';
import cls from './MangaPage.module.css';
import { useGetManga } from './useGetManga';
import { Page } from '@/shared/layout/Page';
import { Banner } from '@/entities/Banner';
import { Cover } from '@/features/Cover';
import { Loader } from '@/shared/ui/kit/loader';
import { cn } from '@/shared/lib/css';
import { MangaTitle } from './MangaTitle';

interface MangaPageProps {
    className?: string;
}

const MangaPage: FC<MangaPageProps> = (props) => {
    const { className } = props;
    const { mangaId } = useParams();

    const { data: manga, isLoading } = useGetManga(mangaId || 0);
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
        <Page>
            <div
                className={cn(
                    isMobile
                        ? 'relative flex flex-col gap-1 mt-10'
                        : `${cls.gridTemplete} grid gap-4`,
                    className,
                )}
            >
                {(manga.banner || isMobile) && (
                    <Banner
                        banner={manga.banner || manga.cover}
                        className={cn(
                            cls.banner,
                            isMobile ? '-mx-4' : 'absolute top-0 left-0 right-0 h-162',
                        )}
                    />
                )}
                <Cover mangaId={manga.id} cover={manga.cover} className={cls.cover} />
                <MangaTitle mangaId={mangaId || 0} className={cls.title} />
                <ButtonBlock className={cls.btnBlock} mangaId={manga.id} />
                {!isMobile && <Sidebar manga={manga} className={cls.sidebar} />}
                <MangaPageContent mangaId={mangaId || 0} className={cls.content} />
            </div>
        </Page>
    );
};
export default MangaPage;
