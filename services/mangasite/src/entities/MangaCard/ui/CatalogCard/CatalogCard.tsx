import { memo } from 'react';
import { classNames } from '@packages/model/src/lib/helpers/classNames';
import { getMangaSiteRoute } from '@packages/model/src/config/router';
import { MangaCard } from '../MangaCard/MangaCard';
import cls from './CatalogCard.module.scss';
import { MangaListItemCatalogType } from '@/shared/api/mangaList';

interface CatalogCardProps {
    className?: string;
    manga: MangaListItemCatalogType;
}

export const CatalogCard = memo((props: CatalogCardProps) => {
    const { className, manga } = props;

    return (
        <MangaCard
            className={classNames(cls.CatalogCard, {}, [className])}
            to={getMangaSiteRoute.manga(manga.urlId)}
            title={manga.title}
            subtitle={manga.type}
            label1={manga.rate}
            label2={manga.bookmark}
            img={manga.cover}
            adaptive="dynamic"
        />
    );
});
