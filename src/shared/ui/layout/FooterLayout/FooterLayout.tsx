import { FC } from 'react';
import cls from './FooterLayout.module.scss';
import { classNames } from '@/shared/lib/helpers/classNames/classNames';

interface FooterLayoutProps {
    className?: string;
}

export const FooterLayout: FC<FooterLayoutProps> = (props) => {
    const { className } = props;

    return <footer className={classNames(cls.FooterLayout, {}, [className])}></footer>;
};
