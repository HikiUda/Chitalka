import { useRanobeGetRelated } from './useRanobeGetRelated';
import { BookRelatedSlider } from './BookRelatedSlider';
import { BookRelatedCard } from './BookRelatedCard';
import { BookId } from '@/shared/kernel/book/book';
import { Heading } from '@/shared/ui/kit/heading';

type RanobeRelatedSliderProps = {
    className?: string;
    ranobeId: BookId;
};

export const RanobeRelatedSlider = (props: RanobeRelatedSliderProps) => {
    const { className, ranobeId } = props;
    const { data } = useRanobeGetRelated(ranobeId);

    if (!data.length) return null;

    return (
        <BookRelatedSlider
            className={className}
            heading={
                <Heading className="ml-3 mb-2" variant="h3" color="primary">
                    Связаное
                </Heading>
            }
            cards={data.map((ranobe) => (
                <BookRelatedCard key={ranobe.relatedId} book={ranobe} />
            ))}
        />
    );
};
