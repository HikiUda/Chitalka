import { memo } from 'react';
import { classNames } from '@packages/model/src/lib/helpers/classNames';
import { formatDate } from '@packages/model/src/lib/helpers/formatDate';
import { getMangaSiteRoute } from '@packages/model/src/config/router/mangaSiteRouter';
import { MangaCardInline } from '../MangaCardInline/MangaCardInline';
import cls from './LastUpdatedMangaCardInline.module.scss';
import { MangaListItemLastUpdatedType } from '@/shared/api/mangaList';

interface LastUpdatedMangaCardInlineProps {
    className?: string;
    manga: MangaListItemLastUpdatedType;
}

export const LastUpdatedMangaCardInline = memo((props: LastUpdatedMangaCardInlineProps) => {
    const { className, manga } = props;
    //TODO link to manga chapter
    return (
        <MangaCardInline
            className={classNames('', {}, [className])}
            title={manga.title}
            to={getMangaSiteRoute.manga(manga.urlId)}
            img={manga.cover}
        >
            <span className={cls.charecter}>
                Tome {manga.tome} Chapter {manga.chapter}
            </span>
            <span className={cls.time}>{formatDate(new Date(manga.chapterCreatedAt))}</span>
        </MangaCardInline>
    );
});
