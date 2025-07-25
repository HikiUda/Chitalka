import { BookNowRead } from '../model/useBookNowRead/useBookNowRead';
import { Heading } from '@/shared/ui/kit/heading';
import { Carousel, CarouselContent, CarouselItem } from '@/shared/ui/kit/carousel';
import { Card } from '@/shared/ui/kit/card';
import { BookCardInline, BookListLayout } from '@/entities/BookList';
import { Badge } from '@/shared/ui/kit/badge';
import { useWindowSize } from '@/shared/kernel/useWindowSize';
import { getRoute } from '@/shared/kernel/router';

type NowReadMangaSliderProps = {
    className?: string;
    bookNowRead: BookNowRead[];
    bookLink: typeof getRoute.MANGA | typeof getRoute.RANOBE;
};

export const BookNowReadSlider = (props: NowReadMangaSliderProps) => {
    const { className, bookNowRead, bookLink } = props;
    const isWidthLg = useWindowSize.use.isWidthLg();

    return (
        <Card className={className}>
            <Heading variant="h2" color="primary" className="ml-3">
                Сейчас читают
            </Heading>
            <Carousel opts={{ active: !isWidthLg }} className="w-full relative">
                <CarouselContent className="pl-2.5">
                    {bookNowRead.map((bookList) => (
                        <CarouselItem
                            key={bookList.heading}
                            className="basis-[90%] sm:basis-[70%] md:basis-[40%] lg:basis-1/3"
                        >
                            <BookListLayout
                                heading={
                                    <Heading variant="h3" color="primary" className="ml-2 mb-3">
                                        {bookList.heading}
                                    </Heading>
                                }
                                list={bookList.data || []}
                                renderItem={(book) => (
                                    <BookCardInline
                                        key={book.id}
                                        to={bookLink(book.urlId)}
                                        img={book.cover}
                                        title={book.title}
                                    >
                                        <Badge variant="secondary">{book.type}</Badge>
                                    </BookCardInline>
                                )}
                                isLoading={bookList.isLoading}
                                skeletonsCount={3}
                            />
                        </CarouselItem>
                    ))}
                </CarouselContent>
            </Carousel>
        </Card>
    );
};
