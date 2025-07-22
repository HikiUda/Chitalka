import { CarouselItem } from '@/shared/ui/kit/carousel';
import { BookCardInline } from '@/entities/BookList';
import { Badge } from '@/shared/ui/kit/badge';
import { cn } from '@/shared/lib/css';
import { getRoute } from '@/shared/kernel/router';
import { Heading } from '@/shared/ui/kit/heading';

type BookRelatedCardProps = {
    className?: string;
    book: {
        urlId: string;
        title: string;
        type: string;
        cover: string;
        status: string;
        relationship: string;
        relatedId: string;
    };
};

export const BookRelatedCard = (props: BookRelatedCardProps) => {
    const { className, book } = props;

    const subtitle = book.relatedId.includes('ranobe') ? `Ranobe * ${book.type}` : book.type;
    const bookLink = book.relatedId.includes('ranobe')
        ? getRoute.RANOBE(book.urlId)
        : getRoute.MANGA(book.urlId);

    return (
        <CarouselItem
            className={cn(
                'basis-75 ml-2 px-1 py-1 bg-card flex rounded-xl border shadow-sm',
                className,
            )}
        >
            <BookCardInline to={bookLink} title={book.title} img={book.cover}>
                <Heading
                    variant="h5"
                    className="max-w-[300px] text-sm opacity-80 text-ellipsis whitespace-nowrap"
                >
                    {subtitle}
                </Heading>
                <div className="flex gap-1 items-center">
                    <Badge variant="secondary">{book.relationship}</Badge>
                    <Badge variant="secondary">{book.status}</Badge>
                </div>
            </BookCardInline>
        </CarouselItem>
    );
};
