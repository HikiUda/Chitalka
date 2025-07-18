import { isMobile } from 'react-device-detect';
import { TrashIcon, XIcon } from 'lucide-react';
import { BookCardInline } from '@/entities/BookList';
import { CarouselItem } from '@/shared/ui/kit/carousel';
import { Button } from '@/shared/ui/kit/button';
import { cn } from '@/shared/lib/css';

type ContinueReadBookCardProps = {
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

export const ContinueReadBookCard = (props: ContinueReadBookCardProps) => {
    const { className, book, disabled, onDelete, chapterLink } = props;
    const { title, cover, tome, chapter } = book;
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
                    <span>Продолжить с</span>
                    <span className="font-semibold">
                        {tome} том {chapter} глава
                    </span>
                </div>
            </BookCardInline>
            <Button
                onClick={onDelete}
                variant="destructive"
                className={
                    isMobile
                        ? 'h-full'
                        : 'p-5 absolute top-0 right-0 opacity-0 rounded-full z-10 hover:scale-110  group-hover/book:opacity-100 group-hover/book:-top-3 group-hover/book:-right-3 group-hover/book:rotate-90 transition-all duration-500'
                }
            >
                {isMobile ? <TrashIcon /> : <XIcon />}
            </Button>
        </CarouselItem>
    );
};
