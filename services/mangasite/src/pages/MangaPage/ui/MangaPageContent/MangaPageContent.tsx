import { FC } from 'react';
import { classNames } from '@packages/model/src/lib/classNames';
import cls from './MangaPageContent.module.scss';

interface MangaPageContentProps {
    className?: string;
}

export const MangaPageContent: FC<MangaPageContentProps> = (props) => {
    const { className } = props;

    return <div className={classNames(cls.MangaPageContent, {}, [className])}>content</div>;
};
