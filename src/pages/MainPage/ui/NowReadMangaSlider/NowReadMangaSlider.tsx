import { FC } from 'react';
import { isMobile } from 'react-device-detect';
import { useNowReadManga } from './useNowReadManga';
import { Heading } from '@/shared/ui/kit/heading';
import { Carousel, CarouselContent, CarouselItem } from '@/shared/ui/kit/carousel';
import { Card } from '@/shared/ui/kit/card';
import { MangaCardInline, MangaListLayout } from '@/entities/ComicList';

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
            <Carousel opts={{ active: isMobile }} className="w-[98vw] max-w-299 relative">
                <CarouselContent className="pl-2.5">
                    {nowReadManga.map((magnaList) => (
                        <CarouselItem
                            key={magnaList.heading}
                            className="basis-[90%] sm:basis-[70%] md:basis-[40%] lg:basis-1/3"
                        >
                            <MangaListLayout
                                heading={
                                    <Heading variant="h3" color="primary" className="ml-2 mb-3">
                                        {magnaList.heading}
                                    </Heading>
                                }
                                list={magnaList.data || []}
                                renderItem={(manga) => (
                                    <MangaCardInline
                                        key={manga.id}
                                        img={manga.cover}
                                        title={manga.title}
                                        subtitle={manga.type}
                                    />
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
