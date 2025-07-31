import { BookRelated, BookRelatedCard } from './BookRelatedCard';
import { createI18nModule } from '@/shared/kernel/i18n';
import {
    Carousel,
    CarouselContent,
    CarouselNext,
    CarouselPrevious,
} from '@/shared/ui/kit/carousel';
import { Heading } from '@/shared/ui/kit/heading';

type BookRelatedSliderProps = {
    className?: string;
    books: BookRelated[];
};

const { useI18n } = createI18nModule({
    related: { ru: 'Связаное', en: 'Related' },
});

export const BookRelatedSlider = (props: BookRelatedSliderProps) => {
    const { className, books } = props;
    const t = useI18n();
    if (!books.length) return null;
    return (
        <div className={className}>
            <Heading className="ml-3 mb-2" variant="h3" color="primary">
                {t('related')}
            </Heading>
            <Carousel
                opts={{
                    dragFree: true,
                }}
                className="w-full relative group"
            >
                <CarouselContent className="pl-2.5">
                    {books.map((book) => (
                        <BookRelatedCard key={book.relatedId} book={book} />
                    ))}
                </CarouselContent>
                <CarouselPrevious className="absolute top-1/2 group-hover:-left-4 left-0 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 disabled:opacity-0" />
                <CarouselNext className="absolute top-1/2 group-hover:-right-4 right-0 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 disabled:opacity-0" />
            </Carousel>
        </div>
    );
};
