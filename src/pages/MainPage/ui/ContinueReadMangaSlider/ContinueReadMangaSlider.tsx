import { FC } from 'react';
import { TrashIcon, XIcon } from 'lucide-react';
import { isMobile } from 'react-device-detect';
import { useGetContinueReadManga } from './useGetContinueReadManga';
import { ContinueReadMangaCard } from './ContinueReadMangaCard';
import { useDeleteContinueReadManga } from './useDeleteContinueReadManga';
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
    const { deleteContinueReadManga, getIsPending } = useDeleteContinueReadManga();

    if (!isLoading && !data.length) return null;

    return (
        <Card className={cn(className, 'py-0 gap-0')}>
            <div className="flex justify-between align-middle mt-4 mx-3">
                <Heading weigth="semibold" variant="h2">
                    Продолжить читать
                </Heading>
                <Button
                    onClick={() => deleteContinueReadManga(0)}
                    disabled={getIsPending(0)}
                    variant="clear"
                >
                    очистить
                </Button>
            </div>
            <Carousel
                opts={{
                    dragFree: true,
                }}
                className="w-[98vw] max-w-299 relative group/carousel"
            >
                <CarouselContent className="pl-4 py-5">
                    {data.map((manga, index) => (
                        <CarouselItem
                            key={index}
                            aria-disabled={getIsPending(manga.id)}
                            className="relative basis-80 ml-2 px-1 py-1 bg-card flex rounded-xl border shadow-sm group/manga aria-disabled:opacity-70 aria-disabled:pointer-events-none"
                        >
                            <ContinueReadMangaCard manga={manga} />
                            <Button
                                onClick={() => deleteContinueReadManga(manga.id)}
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
                    ))}
                    {isLoading &&
                        Array(10)
                            .fill(0)
                            .map((_, ind) => (
                                <CarouselItem
                                    key={ind}
                                    className="basis-80 ml-2 px-1 py-1 bg-card  rounded-xl border shadow-sm"
                                >
                                    <MangaCardInlineSkeleton />
                                </CarouselItem>
                            ))}
                </CarouselContent>
                <CarouselPrevious className="absolute top-1/2 -translate-y-1/2 left-0  opacity-0 group-hover/carousel:-left-4 group-hover/carousel:opacity-100 transition-all duration-300 disabled:opacity-0" />
                <CarouselNext className="absolute top-1/2 -translate-y-1/2 right-0  opacity-0 group-hover/carousel:-right-4 group-hover/carousel:opacity-100 transition-all duration-300 disabled:opacity-0" />
            </Carousel>
        </Card>
    );
};
