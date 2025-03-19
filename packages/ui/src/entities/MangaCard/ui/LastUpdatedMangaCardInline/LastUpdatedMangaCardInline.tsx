import { memo } from 'react';
import { classNames } from '@packages/model/src/lib/classNames';
import { MangaCardInline } from '../MangaCardInline/MangaCardInline';
import cls from './LastUpdatedMangaCardInline.module.scss';

interface LastUpdatedMangaCardInlineProps {
    className?: string;
}

export const LastUpdatedMangaCardInline = memo((props: LastUpdatedMangaCardInlineProps) => {
    const { className } = props;

    return (
        <MangaCardInline
            className={classNames('', {}, [className])}
            title="This is big Title for check style sdfadfasf"
            to="/mangasite"
        >
            <span className={cls.charecter}>Tom 1 Chapter 3</span>
            <span className={cls.time}>10 minutes ago</span>
        </MangaCardInline>
    );
});
