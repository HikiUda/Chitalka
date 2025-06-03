import { memo } from 'react';
import { MangaCard } from '../MangaCard/MangaCard';
import { getRoute } from '@/shared/kernel/router';
import { MangaListItemCatalogType } from '@/shared/api/deprecated/mangaList';

interface CatalogCardProps {
    className?: string;
    manga: MangaListItemCatalogType;
}

export const CatalogCard = memo((props: CatalogCardProps) => {
    const { className, manga } = props;

    return (
        <MangaCard
            className={className}
            to={getRoute.MANGA(manga.urlId)}
            title={manga.title}
            subtitle={manga.type}
            label1={manga.rate}
            label2={manga.bookmark}
            img={manga.cover}
            adaptive="dynamic"
        />
    );
});
