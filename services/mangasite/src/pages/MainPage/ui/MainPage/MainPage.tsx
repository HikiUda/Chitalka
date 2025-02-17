import { FC } from 'react';
import { classNames } from '@packages/model/lib/classNames/classNames';
import cls from './MainPage.module.scss';
import { Page } from '@packages/ui/shared/Page/Page';

interface MainPageProps {
    className?: string;
}

export const MainPage: FC<MainPageProps> = (props) => {
    const { className } = props;
    return <Page className={classNames(cls.MainPage, {}, [className])}>Main</Page>;
};
