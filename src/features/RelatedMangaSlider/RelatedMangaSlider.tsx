import { FC, ReactNode } from 'react';
import { BookmarkIcon, EyeIcon, HeartIcon } from 'lucide-react';
import { useGetRelatedManga } from './useGetRelatedManga';
import { MangaIdType } from '@/shared/kernel/book';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from '@/shared/ui/kit/carousel';
import { BookCardInline, BookCardInlineSkeleton } from '@/entities/BookList';
import { getRoute } from '@/shared/kernel/router';
import { Badge } from '@/shared/ui/kit/badge';
import { toShortcutNumber } from '@/shared/lib/helpers/toShortcutNumber';

interface RelatedMangaSliderProps {
    className?: string;
    mangaId: MangaIdType;
    heading?: ReactNode;
}

export const RelatedMangaSlider: FC<RelatedMangaSliderProps> = (props) => {
    const { className, mangaId, heading } = props;
    const { data = [], isLoading } = useGetRelatedManga(mangaId);

    if (!isLoading && !data.length) return null;

    return (
        <div className={className}>
            {heading}
            <Carousel
                opts={{
                    dragFree: true,
                }}
                className="w-full relative group"
            >
                <CarouselContent className="pl-2.5">
                    {data.map(({ urlId, cover, title, type, likes, views, bookmarks }, index) => (
                        <CarouselItem
                            key={index}
                            className="basis-75 ml-2 px-1 py-1 bg-card flex rounded-xl border shadow-sm"
                        >
                            <BookCardInline
                                to={getRoute.MANGA(urlId)}
                                title={title}
                                subtitle={type}
                                img={cover}
                            >
                                <div className="flex gap-1 items-center">
                                    <Badge variant="muted">
                                        <EyeIcon /> {toShortcutNumber(views)}
                                    </Badge>
                                    <Badge variant="muted">
                                        <HeartIcon /> {toShortcutNumber(likes)}
                                    </Badge>
                                    <Badge variant="muted">
                                        <BookmarkIcon /> {toShortcutNumber(bookmarks)}
                                    </Badge>
                                </div>
                            </BookCardInline>
                        </CarouselItem>
                    ))}
                    {isLoading &&
                        Array(3)
                            .fill(0)
                            .map((_, ind) => (
                                <CarouselItem
                                    key={ind}
                                    className="basis-75 ml-2 px-1 py-1 bg-card flex rounded-xl border shadow-sm"
                                >
                                    <BookCardInlineSkeleton />
                                </CarouselItem>
                            ))}
                </CarouselContent>
                <CarouselPrevious className="absolute top-1/2 group-hover:-left-4 left-0 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 disabled:opacity-0" />
                <CarouselNext className="absolute top-1/2 group-hover:-right-4 right-0 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 disabled:opacity-0" />
            </Carousel>
        </div>
    );
};
