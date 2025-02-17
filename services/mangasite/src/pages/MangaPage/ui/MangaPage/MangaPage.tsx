import { FC } from 'react';
import { classNames } from '@packages/model/lib/classNames/classNames';
import { Page } from '@packages/ui/shared/Page/Page';
import cls from './MangaPage.module.scss';

interface MangaPageProps {
    className?: string;
}

export const MangaPage: FC<MangaPageProps> = (props) => {
    const { className } = props;

    return <Page className={classNames(cls.MangaPage, {}, [className])}>MangaPage</Page>;
};
