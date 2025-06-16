import { FC } from 'react';
import { useGetContinueReadManga } from '../model/useGetContinueReadManga';
import { useDeleteContinueReadManga } from '../model/useDeleteContinueReadManga';
import { ContinueReadMangaCard } from './ContinueReadMangaCard';
import { BookCardInlineSkeleton } from '@/entities/BookList';
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
import { useSession } from '@/shared/api/session';

interface ContinueReadMangaSliderProps {
    className?: string;
}

export const ContinueReadMangaSlider: FC<ContinueReadMangaSliderProps> = (props) => {
    const { className } = props;

    const { data = [], isLoading } = useGetContinueReadManga();
    const { deleteContinueReadManga, getIsPending } = useDeleteContinueReadManga();
    const { isUserAuth } = useSession();

    if (!isUserAuth) return null;
    if (!isLoading && !data.length) return null;

    return (
        <Card className={cn(className, 'py-0 gap-0')}>
            <div className="flex justify-between align-middle mt-4 mx-3">
                <Heading variant="h2" color="primary">
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
                className="w-full relative group/carousel"
            >
                <CarouselContent className="pl-4 py-5">
                    {data.map((manga, index) => (
                        <ContinueReadMangaCard
                            manga={manga}
                            key={index}
                            className="basis-80"
                            onDelete={() => deleteContinueReadManga(manga.id)}
                            disabled={getIsPending(manga.id)}
                        />
                    ))}
                    {isLoading &&
                        Array(10)
                            .fill(0)
                            .map((_, ind) => (
                                <CarouselItem
                                    key={ind}
                                    className="basis-80 ml-2 px-1 py-1 bg-card  rounded-xl border shadow-sm"
                                >
                                    <BookCardInlineSkeleton />
                                </CarouselItem>
                            ))}
                </CarouselContent>
                <CarouselPrevious className="absolute top-1/2 -translate-y-1/2 left-0  opacity-0 group-hover/carousel:-left-4 group-hover/carousel:opacity-100 transition-all duration-300 disabled:opacity-0" />
                <CarouselNext className="absolute top-1/2 -translate-y-1/2 right-0  opacity-0 group-hover/carousel:-right-4 group-hover/carousel:opacity-100 transition-all duration-300 disabled:opacity-0" />
            </Carousel>
        </Card>
    );
};
