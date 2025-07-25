import { TrashIcon, XIcon } from 'lucide-react';
import { BookCardInline } from '@/entities/BookList';
import { CarouselItem } from '@/shared/ui/kit/carousel';
import { Button } from '@/shared/ui/kit/button';
import { cn } from '@/shared/lib/css';
import { useWindowSize } from '@/shared/kernel/useWindowSize';

type BookContinueReadCardProps = {
    className?: string;
    book: {
        title: string;
        cover: string;
        tome: number;
        chapter: number;
    };
    chapterLink: string;
    onDelete: () => void;
    disabled: boolean;
};

export const BookContinueReadCard = (props: BookContinueReadCardProps) => {
    const { className, book, disabled, onDelete, chapterLink } = props;
    const { title, cover, tome, chapter } = book;
    const isWidthLg = useWindowSize.use.isWidthLg();
    return (
        <CarouselItem
            aria-disabled={disabled}
            className={cn(
                'relative ml-2 px-1 py-1 bg-card flex rounded-xl border shadow-sm group/book aria-disabled:opacity-70 aria-disabled:pointer-events-none',
                className,
            )}
        >
            <BookCardInline to={chapterLink} title={title} img={cover}>
                <div className="flex flex-col gap-1">
                    <span className="text-sm opacity-80">Продолжить с</span>
                    <span className="text-base">
                        {tome} том {chapter} глава
                    </span>
                </div>
            </BookCardInline>
            <Button
                onClick={onDelete}
                variant="destructive"
                className={
                    !isWidthLg
                        ? 'h-full'
                        : 'p-5 absolute top-0 right-0 opacity-0 rounded-full z-10 hover:scale-110  group-hover/book:opacity-100 group-hover/book:-top-3 group-hover/book:-right-3 group-hover/book:rotate-90 transition-all duration-500'
                }
            >
                {!isWidthLg ? <TrashIcon /> : <XIcon />}
            </Button>
        </CarouselItem>
    );
};
