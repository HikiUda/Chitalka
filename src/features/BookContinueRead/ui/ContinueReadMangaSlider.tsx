import { useMangaGetContinueReadList } from '../model/useMangaGetContinueReadList';
import { useMangaDeleteContinueRead } from '../model/useMangaDeleteContinueRead';
import { ContinueReadBookCard } from './ContinueReadBookCard';

import { ContinueReadBookSlider } from './ContinueReadBookSlider';
import { useSession } from '@/shared/kernel/session';
import { getRoute } from '@/shared/kernel/router';

type ContinueReadMangaSliderProps = {
    className?: string;
};

export const ContinueReadMangaSlider = (props: ContinueReadMangaSliderProps) => {
    const { className } = props;

    const { data = [], isLoading } = useMangaGetContinueReadList();
    const { deleteContinueReadManga, getIsPending } = useMangaDeleteContinueRead();
    const { isUserAuth } = useSession();

    if (!isUserAuth) return null;
    if (!isLoading && !data.length) return null;

    return (
        <ContinueReadBookSlider
            className={className}
            cards={data.map((manga, index) => (
                <ContinueReadBookCard
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
};
