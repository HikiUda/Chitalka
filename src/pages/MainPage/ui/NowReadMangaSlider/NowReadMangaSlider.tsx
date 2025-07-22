import { FC } from 'react';
import { isMobile } from 'react-device-detect';
import { useNowReadManga } from './useNowReadManga';
import { Heading } from '@/shared/ui/kit/heading';
import { Carousel, CarouselContent, CarouselItem } from '@/shared/ui/kit/carousel';
import { Card } from '@/shared/ui/kit/card';
import { BookCardInline, BookListLayout } from '@/entities/BookList';
import { getRoute } from '@/shared/kernel/router';
import { Badge } from '@/shared/ui/kit/badge';

interface NowReadMangaSliderProps {
    className?: string;
}

export const NowReadMangaSlider: FC<NowReadMangaSliderProps> = (props) => {
    const { className } = props;

    const nowReadManga = useNowReadManga();

    return (
        <Card className={className}>
            <Heading variant="h2" color="primary" className="ml-3">
                Сейчас читают
            </Heading>
            <Carousel opts={{ active: isMobile }} className="w-full relative">
                <CarouselContent className="pl-2.5">
                    {nowReadManga.map((magnaList) => (
                        <CarouselItem
                            key={magnaList.heading}
                            className="basis-[90%] sm:basis-[70%] md:basis-[40%] lg:basis-1/3"
                        >
                            <BookListLayout
                                heading={
                                    <Heading variant="h3" color="primary" className="ml-2 mb-3">
                                        {magnaList.heading}
                                    </Heading>
                                }
                                list={magnaList.data || []}
                                renderItem={(manga) => (
                                    <BookCardInline
                                        key={manga.id}
                                        to={getRoute.MANGA(manga.urlId)}
                                        img={manga.cover}
                                        title={manga.title}
                                    >
                                        <Badge variant="secondary">{manga.type}</Badge>
                                    </BookCardInline>
                                )}
                                isLoading={magnaList.isLoading}
                                skeletonsCount={3}
                            />
                        </CarouselItem>
                    ))}
                </CarouselContent>
            </Carousel>
        </Card>
    );
};
