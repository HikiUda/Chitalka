import { memo } from 'react';
import { BookPopularLastUpdated } from '../model/useBookGetPopularLastUpdated/useBookPopularLastUpdated';
import { Card } from '@/shared/ui/kit/card';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from '@/shared/ui/kit/carousel';
import { BookCard, BookCardSkeleton } from '@/entities/BookList';

type BookPopularLastUpdatedSliderProps = {
    className?: string;
    data: BookPopularLastUpdated;
};

export const BookPopularLastUpdatedSlider = memo((props: BookPopularLastUpdatedSliderProps) => {
    const { className, data } = props;

    return (
        <Card className={className}>
            <Carousel
                opts={{
                    dragFree: true,
                }}
                className="w-full relative group"
            >
                <CarouselContent className="pl-2.5">
                    {data.books.map((book, index) => (
                        <CarouselItem key={index} className="basis-auto">
                            <BookCard
                                to={data.bookLink(book.urlId)}
                                title={book.title}
                                subtitle={book.type}
                                img={book.cover}
                                label3={`Глава ${book.chapter}`}
                            />
                        </CarouselItem>
                    ))}
                    {data.isLoading &&
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
});
BookPopularLastUpdatedSlider.displayName = 'BookPopularLastUpdatedSlider';
