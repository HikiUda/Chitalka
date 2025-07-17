import {
    Carousel,
    CarouselContent,
    CarouselDynamicDots,
    CarouselItem,
} from '@/shared/ui/kit/carousel';
import { AppAdaptiveImage } from '@/shared/ui/AppAdaptiveImage';
import { cn } from '@/shared/lib/css';

type Cover = {
    id: number;
    cover: string;
};

type CoversModalProps = {
    className?: string;
    covers: Cover[];
};

export const CoversModal = (props: CoversModalProps) => {
    const { className, covers } = props;

    return (
        <Carousel className={cn('relative', className)}>
            <CarouselContent className="max-w-120">
                {covers.map((cover) => (
                    <CarouselItem className="max-w-120 min-w-60" key={cover.id}>
                        <AppAdaptiveImage img={cover.cover} className="w-full pb-[134%]" />
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselDynamicDots className="absolute bottom-1 left-[50%] translate-x-[-50%]" />
        </Carousel>
    );
};
