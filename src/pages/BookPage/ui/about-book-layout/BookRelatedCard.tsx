import { CarouselItem } from '@/shared/ui/kit/carousel';
import { BookCardInline } from '@/entities/BookList';
import { Badge } from '@/shared/ui/kit/badge';
import { cn } from '@/shared/lib/css';
import { getRoute } from '@/shared/kernel/router';
import { Heading } from '@/shared/ui/kit/heading';
import { BookRelationship } from '@/shared/kernel/book/relationship';
import { BookStatus } from '@/shared/kernel/book/bookStatus';
import { MangaType } from '@/shared/kernel/book/mangaTypes';
import { RanobeType } from '@/shared/kernel/book/ranobeType';
import { createI18nModule } from '@/shared/kernel/i18n';

export type BookRelated = {
    urlId: string;
    title: string;
    type: MangaType | RanobeType;
    cover: string;
    status: BookStatus;
    relationship: BookRelationship;
    relatedId: string;
};

type BookRelatedCardProps = {
    className?: string;
    book: BookRelated;
};

const { useI18n } = createI18nModule({
    related: { ru: 'Связаное', en: 'Related' },
});

export const BookRelatedCard = (props: BookRelatedCardProps) => {
    const { className, book } = props;
    const t = useI18n();

    const subtitle = book.relatedId.includes('ranobe')
        ? `Ranobe * ${t(`bookType.${book.type}`)}`
        : t(`bookType.${book.type}`);
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
                    <Badge variant="secondary">{t(`bookRelationship.${book.relationship}`)}</Badge>
                    <Badge variant="secondary">{t(`bookStatus.${book.status}`)}</Badge>
                </div>
            </BookCardInline>
        </CarouselItem>
    );
};
