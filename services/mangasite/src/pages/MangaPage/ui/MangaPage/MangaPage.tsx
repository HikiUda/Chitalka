import { FC } from 'react';
import { classNames } from '@packages/model/src/lib/helpers/classNames/classNames';
import { useGetManga } from '@packages/model/src/api/manga/useGetManga';
import { Page } from '@packages/ui/src/shared/Page';
import { useParams } from 'react-router-dom';
import { MangaTitle } from '../MangaTitle/MangaTitle';
import { MangaPageContent } from '../MangaPageContent/MangaPageContent';
import { ButtonBlock } from '../ButtonBlock/ButtonBlock';
import { Sidebar } from '../Sidebar/Sidebar';
import cls from './MangaPage.module.scss';
import { Banner } from '@/entities/Banner';
import { Cover } from '@/features/Cover';

interface MangaPageProps {
    className?: string;
}

const MangaPage: FC<MangaPageProps> = (props) => {
    const { className } = props;
    //TODO handle mangaId is undefinded
    const { id: mangaId } = useParams();
    const { data: manga, isLoading } = useGetManga(mangaId || 0);
    return (
        <Page>
            <div className={classNames(cls.MangaPage, {}, [className])}>
                <Banner banner={manga?.banner} className={cls.banner} />
                <Cover mangaId={manga?.id} cover={manga?.cover} className={cls.cover} />
                <MangaTitle manga={manga} className={cls.title} isLoading={isLoading} />
                <ButtonBlock className={cls.btnBlock} />
                <Sidebar manga={manga} className={cls.sidebar} isLaoding={isLoading} />
                <MangaPageContent mangaId={mangaId || 0} className={cls.content} />
            </div>
        </Page>
    );
};
export default MangaPage;
