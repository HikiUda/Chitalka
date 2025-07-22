import { useMangaGetRelated } from './useMangaGetRelated';
import { BookRelatedSlider } from './BookRelatedSlider';
import { BookRelatedCard } from './BookRelatedCard';
import { BookId } from '@/shared/kernel/book/book';
import { Heading } from '@/shared/ui/kit/heading';

type MangaRelatedSliderProps = {
    className?: string;
    mangaId: BookId;
};

export const MangaRelatedSlider = (props: MangaRelatedSliderProps) => {
    const { className, mangaId } = props;
    const { data } = useMangaGetRelated(mangaId);

    if (!data.length) return null;

    return (
        <BookRelatedSlider
            className={className}
            heading={
                <Heading className="ml-3 mb-2" variant="h3" color="primary">
                    Связаное
                </Heading>
            }
            cards={data.map((manga) => (
                <BookRelatedCard key={manga.relatedId} book={manga} />
            ))}
        />
    );
};
