import { FC } from 'react';
import { X } from 'lucide-react';
import { useGetContinueReadManga } from './useGetContinueReadManga';
import { ContinueReadMangaCard } from './ContinueReadMangaCard';
import { MangaCardInlineSkeleton } from '@/entities/ComicList';
import { Card } from '@/shared/ui/kit/card';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from '@/shared/ui/kit/carousel';
import { Button } from '@/shared/ui/kit/button';
import { cn } from '@/shared/lib/css';
import { Heading } from '@/shared/ui/kit/heading';

interface ContinueReadMangaSliderProps {
    className?: string;
}

export const ContinueReadMangaSlider: FC<ContinueReadMangaSliderProps> = (props) => {
    const { className } = props;

    const { data = [], isLoading } = useGetContinueReadManga();

    if (!isLoading && !data.length) return null;

    return (
        <Card className={cn(className, 'py-0 gap-0')}>
            <div className="flex justify-between align-middle mt-4 mx-3">
                <Heading weigth="semibold" variant="h2">
                    Продолжить читать
                </Heading>
                <Button variant="clear">очистить</Button>
            </div>
            <Carousel
                opts={{
                    dragFree: true,
                }}
                className="w-[95vw] max-w-299 relative group/carousel"
            >
                <CarouselContent className="pl-4 py-5">
                    {data.map((manga, index) => (
                        <CarouselItem
                            key={index}
                            className="relative basis-75 ml-2 px-1 py-1 bg-card flex flex-col rounded-xl border shadow-sm group/manga"
                        >
                            <ContinueReadMangaCard manga={manga} />
                            <Button className="p-5 absolute top-0 right-0 opacity-0 rounded-full z-10 group-hover/manga:opacity-100 group-hover/manga:-top-3 group-hover/manga:-right-3 group-hover/manga:rotate-90 transition-all duration-500">
                                <X />
                            </Button>
                        </CarouselItem>
                    ))}
                    {isLoading &&
                        Array(10)
                            .fill(0)
                            .map((_, ind) => (
                                <CarouselItem
                                    key={ind}
                                    className="basis-75 ml-2 px-1 py-1 bg-card flex flex-col rounded-xl border shadow-sm"
                                >
                                    <MangaCardInlineSkeleton />
                                </CarouselItem>
                            ))}
                </CarouselContent>
                <CarouselPrevious className="absolute top-1/2 group-hove/carouselr:-left-4 left-0 -translate-y-1/2 opacity-0 group-hover/carousel:opacity-100 transition-all duration-300 disabled:opacity-0" />
                <CarouselNext className="absolute top-1/2 group-hover/carousel:-right-4 right-0 -translate-y-1/2 opacity-0 group-hover/carousel:opacity-100 transition-all duration-300 disabled:opacity-0" />
            </Carousel>
        </Card>
    );
};
