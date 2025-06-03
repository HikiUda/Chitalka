import { memo } from 'react';
import { classNames } from '@/shared/lib/helpers/classNames';
import { getRoute } from '@/shared/kernel/router';
import { MangaCardInline } from '../MangaCardInline/MangaCardInline';
import { MangaListItemCatalogType } from '@/shared/api/deprecated/mangaList';

interface PrimaryMangaCardInlineProps {
    className?: string;
    manga: MangaListItemCatalogType;
}

export const PrimaryMangaCardInline = memo((props: PrimaryMangaCardInlineProps) => {
    const { className, manga } = props;

    return (
        <MangaCardInline
            className={classNames('', {}, [className])}
            title={manga.title}
            subtitle={manga.type}
            img={manga.cover}
            to={getRoute.MANGA(manga.urlId)}
        />
    );
});
