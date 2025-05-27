import { FC } from 'react';
import { useGetMangaCovers } from './useGetMangaCovers';
import {
    Carousel,
    CarouselContent,
    CarouselDynamicDots,
    CarouselItem,
} from '@/shared/ui/kit/carousel';
import { MangaIdType } from '@/shared/kernel/manga';
import { AppAdaptiveImage } from '@/shared/ui/AppAdaptiveImage';
import { cn } from '@/shared/lib/css';
import { Loader } from '@/shared/ui/kit/loader';

interface CoversModalProps {
    className?: string;
    mangaId: MangaIdType;
}

export const CoversModal: FC<CoversModalProps> = (props) => {
    const { className, mangaId } = props;
    const { data, isLoading } = useGetMangaCovers(mangaId);

    if (isLoading) return <Loader variant="flower" />;
    if (!data?.length) return <div />;
    return (
        <Carousel className={cn('relative', className)}>
            <CarouselContent className="max-w-120">
                {data.map((cover) => (
                    <CarouselItem className="max-w-120 min-w-60" key={cover.id}>
                        <AppAdaptiveImage img={cover.cover} className="w-full pb-[134%]" />
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselDynamicDots className="absolute bottom-1 left-[50%] translate-x-[-50%]" />
        </Carousel>
    );
};
