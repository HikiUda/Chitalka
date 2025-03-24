import { FC } from 'react';
import { classNames } from '@packages/model/src/lib/classNames/classNames';
import { Page } from '@packages/ui/src/shared/Page';
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
    return (
        <Page>
            <div className={classNames(cls.MangaPage, {}, [className])}>
                <Banner className={cls.banner} />
                <Cover className={cls.cover} />
                <MangaTitle className={cls.title} />
                <ButtonBlock className={cls.btnBlock} />
                <Sidebar className={cls.sidebar} />
                <MangaPageContent className={cls.content} />
            </div>
        </Page>
    );
};
export default MangaPage;
