import { memo } from 'react';
import { useMangaGetContinueReadList } from '../model/useMangaGetContinueReadList';
import { useMangaDeleteContinueRead } from '../model/useMangaDeleteContinueRead';
import { BookContinueReadCard } from './BookContinueReadCard';

import { BookContinueReadSlider } from './BookContinueReadSlider';
import { useSession } from '@/shared/kernel/session';
import { getRoute } from '@/shared/kernel/router';

type MangaContinueReadSliderProps = {
    className?: string;
};

export const MangaContinueReadSlider = memo((props: MangaContinueReadSliderProps) => {
    const { className } = props;

    const { data = [], isLoading } = useMangaGetContinueReadList();
    const { deleteContinueReadManga, getIsPending } = useMangaDeleteContinueRead();
    const { isUserAuth } = useSession();

    if (!isUserAuth) return null;
    if (!isLoading && !data.length) return null;

    return (
        <BookContinueReadSlider
            className={className}
            cards={data.map((manga, index) => (
                <BookContinueReadCard
                    book={manga}
                    chapterLink={getRoute.MANGA_READ(manga.urlId, manga)}
                    key={index}
                    className="basis-80"
                    onDelete={() => deleteContinueReadManga(manga.id)}
                    disabled={getIsPending(manga.id)}
                />
            ))}
            isLoading={isLoading}
            deleteAll={() => deleteContinueReadManga(0)}
            isDeleteAllPending={getIsPending(0)}
        />
    );
});
MangaContinueReadSlider.displayName = 'MangaContinueReadSlider';
