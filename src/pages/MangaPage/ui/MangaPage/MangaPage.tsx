import { FC } from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { isMobile } from 'react-device-detect';
import { MangaTitle } from '../MangaTitle/MangaTitle';
import { MangaPageContent } from '../MangaPageContent/MangaPageContent';
import { ButtonBlock } from '../ButtonBlock/ButtonBlock';
import { Sidebar } from '../Sidebar/Sidebar';
import cls from './MangaPage.module.scss';
import { getFlex } from '@/shared/deprecate-ui/Stack';
import { Loader } from '@/shared/deprecate-ui/Loader';
import { Page } from '@/shared/layout/Page';
import { classNames } from '@/shared/lib/helpers/classNames/classNames';
import { Banner } from '@/entities/Banner';
import { Cover } from '@/features/Cover';
import { MangaApi } from '@/shared/api/deprecated/individualManga';

interface MangaPageProps {
    className?: string;
}

const MangaPage: FC<MangaPageProps> = (props) => {
    const { className } = props;
    const { id: mangaId } = useParams();
    const {
        data: manga,
        isLoading,
        isError,
    } = useQuery(MangaApi.getMangaQueryOptions(mangaId || 0)); //TODO thinking about 0
    //TODO loading end error state
    if (!manga && isLoading)
        return (
            <Page>
                <Loader loader="flower" />
            </Page>
        );
    if (!manga || isError) return <Page>Manga not Found</Page>;
    return (
        <Page>
            <div
                className={classNames(
                    isMobile ? getFlex({ direction: 'column', gap: '4' }) : cls.MangaPage,
                    { [cls.pagePedding]: isMobile },
                    [className],
                )}
            >
                {!isMobile && manga.banner && (
                    <Banner banner={manga?.banner} className={cls.banner} />
                )}
                {isMobile && (
                    <Banner className={cls.mobileBanner} banner={manga.banner || manga.cover} />
                )}
                <Cover mangaId={manga.id} cover={manga.cover} className={cls.cover} />
                <MangaTitle manga={manga} className={cls.title} />

                <ButtonBlock className={cls.btnBlock} mangaId={manga.id} />
                {!isMobile && <Sidebar manga={manga} className={cls.sidebar} />}

                <MangaPageContent mangaId={mangaId || 0} className={cls.content} />
            </div>
        </Page>
    );
};
export default MangaPage;
