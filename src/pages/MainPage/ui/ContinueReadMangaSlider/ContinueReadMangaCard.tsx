import { FC } from 'react';
import { MangaCardInline } from '@/entities/ComicList';
import { getRoute } from '@/shared/kernel/router';
import { Progress } from '@/shared/ui/kit/progress';

interface ContinueReadMangaCardProps {
    className?: string;
    manga: {
        id: number;
        urlId: string;
        title: string;
        cover: string;
        tome: number;
        chapter: number;
        chapterCount: number;
        readedChapters: number;
        chapterId: number;
    };
}

export const ContinueReadMangaCard: FC<ContinueReadMangaCardProps> = (props) => {
    const { className, manga } = props;
    const { urlId, title, chapterCount, readedChapters, cover, tome, chapter } = manga;
    return (
        <MangaCardInline
            className={className}
            //TODO link to chapter
            to={getRoute.manga(urlId)}
            title={title}
            img={cover}
        >
            <div>
                <div className="flex justify-between">
                    <span>
                        {tome} том {chapter} глава
                    </span>
                    <span>
                        {readedChapters} из {chapterCount}
                    </span>
                </div>
                <Progress value={(readedChapters / chapterCount) * 100} />
            </div>
        </MangaCardInline>
    );
};
