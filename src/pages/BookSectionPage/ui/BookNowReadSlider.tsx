import { memo } from 'react';
import { BookNowRead } from '../model/useBookNowRead/useBookNowRead';
import { Heading } from '@/shared/ui/kit/heading';
import { Carousel, CarouselContent, CarouselItem } from '@/shared/ui/kit/carousel';
import { Card } from '@/shared/ui/kit/card';
import { BookCardInline, BookListLayout } from '@/entities/BookList';
import { Badge } from '@/shared/ui/kit/badge';
import { useWindowSize } from '@/shared/kernel/useWindowSize';
import { createI18nModule } from '@/shared/kernel/i18n';

type NowReadMangaSliderProps = {
    className?: string;
    column_1: BookNowRead;
    column_2: BookNowRead;
    column_3: BookNowRead;
};

const { useI18n } = createI18nModule({
    header: {
        ru: 'Сейчас читают',
        en: 'Now Read',
    },
    moreViewed: {
        ru: 'Просматриваемые',
        en: 'More viewed',
    },
    rating: {
        ru: 'Рейтинговые',
        en: 'Rating',
    },
    new: {
        ru: 'Новинки',
        en: 'New',
    },
});

export const BookNowReadSlider = memo((props: NowReadMangaSliderProps) => {
    const t = useI18n();
    const { className, column_1, column_2, column_3 } = props;
    const isWidthLg = useWindowSize.use.isWidthLg();

    return (
        <Card className={className}>
            <Heading variant="h2" color="primary" className="ml-3">
                {t('header')}
            </Heading>
            <Carousel opts={{ active: !isWidthLg }} className="w-full relative">
                <CarouselContent className="pl-2.5">
                    {[column_1, column_2, column_3].map((bookList) => (
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
                                        to={bookList.bookLink(book.urlId)}
                                        img={book.cover}
                                        title={book.title}
                                    >
                                        <Badge variant="secondary">
                                            {t(`bookType.${book.type}`)}
                                        </Badge>
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
});
BookNowReadSlider.displayName = 'BookNowReadSlider';
