import { ReactNode } from 'react';
import {
    Carousel,
    CarouselContent,
    CarouselNext,
    CarouselPrevious,
} from '@/shared/ui/kit/carousel';

type BookRelatedSliderProps = {
    className?: string;
    heading?: ReactNode;
    cards: ReactNode;
};

export const BookRelatedSlider = (props: BookRelatedSliderProps) => {
    const { className, cards, heading } = props;
    return (
        <div className={className}>
            {heading}
            <Carousel
                opts={{
                    dragFree: true,
                }}
                className="w-full relative group"
            >
                <CarouselContent className="pl-2.5">{cards}</CarouselContent>
                <CarouselPrevious className="absolute top-1/2 group-hover:-left-4 left-0 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 disabled:opacity-0" />
                <CarouselNext className="absolute top-1/2 group-hover:-right-4 right-0 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 disabled:opacity-0" />
            </Carousel>
        </div>
    );
};
