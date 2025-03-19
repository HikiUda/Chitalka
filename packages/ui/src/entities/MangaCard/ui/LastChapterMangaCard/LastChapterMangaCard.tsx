import { memo } from 'react';
import { MangaCard } from '../MangaCard/MangaCard';

interface LastChapterMangaCardProps {
    className?: string;
}

export const LastChapterMangaCard = memo((props: LastChapterMangaCardProps) => {
    const { className } = props;

    return (
        <MangaCard
            className={className}
            title="Title"
            subtitle="Manga"
            label3="Chapter 45"
            to="/mangasite/f"
        />
    );
});
