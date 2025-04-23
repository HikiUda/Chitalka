import { memo } from 'react';
import { classNames } from '@packages/model/src/lib/helpers/classNames';
import { getMangaSiteRoute } from '@packages/model/src/config/router';
import { MangaCardInline } from '../MangaCardInline/MangaCardInline';
import { MangaListItemCatalogType } from '@/shared/api/mangaList';

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
            to={getMangaSiteRoute.manga(manga.urlId)}
        />
    );
});
