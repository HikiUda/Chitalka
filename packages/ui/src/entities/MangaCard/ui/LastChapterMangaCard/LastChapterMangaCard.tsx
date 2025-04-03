import { memo } from 'react';
import { getMangaSiteRoute } from '@packages/model/src/config/router/mangaSiteRouter';
import { MangaCard } from '../MangaCard/MangaCard';
import { MangaListItemLastUpdatedType } from '../../model/types/mangaListItemLastUpdated';

interface LastChapterMangaCardProps {
    className?: string;
    manga: MangaListItemLastUpdatedType;
}

export const LastChapterMangaCard = memo((props: LastChapterMangaCardProps) => {
    const { className, manga } = props;
    //TODO link to manga chapter
    return (
        <MangaCard
            className={className}
            title={manga.title}
            subtitle={manga.type}
            label3={'Глава ' + manga.chapter}
            img={manga.cover}
            to={getMangaSiteRoute.manga(manga.urlId)}
        />
    );
});
