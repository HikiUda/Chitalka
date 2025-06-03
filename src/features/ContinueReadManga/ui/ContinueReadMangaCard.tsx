import { FC } from 'react';
import { isMobile } from 'react-device-detect';
import { TrashIcon, XIcon } from 'lucide-react';
import { MangaCardInline } from '@/entities/ComicList';
import { getRoute } from '@/shared/kernel/router';
import { Progress } from '@/shared/ui/kit/progress';
import { ApiSchemas } from '@/shared/api/instance';
import { CarouselItem } from '@/shared/ui/kit/carousel';
import { Button } from '@/shared/ui/kit/button';
import { cn } from '@/shared/lib/css';

interface ContinueReadMangaCardProps {
    className?: string;
    manga: ApiSchemas['MangaListItemContinueReadDto'];
    onDelete: () => void;
    disabled: boolean;
}

export const ContinueReadMangaCard: FC<ContinueReadMangaCardProps> = (props) => {
    const { className, manga, disabled, onDelete } = props;
    const { urlId, title, chapterCount, readedChapters, cover, tome, chapter } = manga;
    return (
        <CarouselItem
            aria-disabled={disabled}
            className={cn(
                'relative ml-2 px-1 py-1 bg-card flex rounded-xl border shadow-sm group/manga aria-disabled:opacity-70 aria-disabled:pointer-events-none',
                className,
            )}
        >
            <MangaCardInline
                //TODO link to chapter
                to={getRoute.MANGA(urlId)}
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
            <Button
                onClick={onDelete}
                variant="destructive"
                className={
                    isMobile
                        ? 'h-full'
                        : 'p-5 absolute top-0 right-0 opacity-0 rounded-full z-10 hover:scale-110  group-hover/manga:opacity-100 group-hover/manga:-top-3 group-hover/manga:-right-3 group-hover/manga:rotate-90 transition-all duration-500'
                }
            >
                {isMobile ? <TrashIcon /> : <XIcon />}
            </Button>
        </CarouselItem>
    );
};
