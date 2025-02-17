import { FC } from 'react';
import { classNames } from '@packages/model/src/lib/classNames/classNames';
import cls from './FooterLayout.module.scss';

interface FooterLayoutProps {
    className?: string;
}

export const FooterLayout: FC<FooterLayoutProps> = (props) => {
    const { className } = props;

    return <footer className={classNames(cls.FooterLayout, {}, [className])}></footer>;
};
