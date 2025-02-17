import { FC } from 'react';
import { classNames } from '@packages/model/src/lib/classNames/classNames';
import cls from './MainPage.module.scss';
import { Page } from '@packages/ui/src/shared/Page/Page';

interface MainPageProps {
    className?: string;
}

export const MainPage: FC<MainPageProps> = (props) => {
    const { className } = props;
    return <Page className={classNames(cls.MainPage, {}, [className])}>Main</Page>;
};
