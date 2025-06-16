import { FC } from 'react';
import { useGetLastUpdatedPopularManga } from './useGetLastUpdatedPopularManga';
import { Card } from '@/shared/ui/kit/card';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from '@/shared/ui/kit/carousel';
import { BookCard, BookCardSkeleton } from '@/entities/BookList';
import { getRoute } from '@/shared/kernel/router';

interface LastUpdatedPopularMangaSliderProps {
    className?: string;
}

export const LastUpdatedPopularMangaSlider: FC<LastUpdatedPopularMangaSliderProps> = (props) => {
    const { className } = props;

    const { data = [], isLoading } = useGetLastUpdatedPopularManga();

    return (
        <Card className={className}>
            <Carousel
                opts={{
                    dragFree: true,
                }}
                className="w-full relative group"
            >
                <CarouselContent className="pl-2.5">
                    {data.map(({ urlId, title, type, chapter, cover }, index) => (
                        <CarouselItem key={index} className="basis-auto">
                            <BookCard
                                //TODO link to chapter
                                to={getRoute.MANGA(urlId)}
                                title={title}
                                subtitle={type}
                                img={cover}
                                label3={`Глава ${chapter}`}
                            />
                        </CarouselItem>
                    ))}
                    {isLoading &&
                        Array(10)
                            .fill(0)
                            .map((_, ind) => (
                                <CarouselItem key={ind} className="basis-auto">
                                    <BookCardSkeleton />
                                </CarouselItem>
                            ))}
                </CarouselContent>
                <CarouselPrevious className="absolute top-1/2 group-hover:-left-4 left-0 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 disabled:opacity-0" />
                <CarouselNext className="absolute top-1/2 group-hover:-right-4 right-0 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 disabled:opacity-0" />
            </Carousel>
        </Card>
    );
};
