import { Link } from 'react-router-dom';
import { MoveLeftIcon } from 'lucide-react';
import { cn } from '@/shared/lib/css';
import { Heading } from '@/shared/ui/kit/heading';
import { useWindowSize } from '@/shared/kernel/useWindowSize';

type BackToBookProps = {
    className?: string;
    bookTitle: string;
    chapterTitle: string;
    bookLink: string;
};

export const BackToBook = (props: BackToBookProps) => {
    const { className, bookLink, bookTitle, chapterTitle } = props;
    const isWidthLg = useWindowSize.use.isWidthLg();
    return (
        <Link
            to={bookLink}
            className={cn(
                'flex items-center gap-1 overflow-hidden p-2  hover:bg-accent group/backToBook',
                isWidthLg && 'pl-4',
                className,
            )}
        >
            {isWidthLg && (
                <MoveLeftIcon className="group-hover/backToBook:-translate-x-2 transition-transform" />
            )}
            <div className="flex flex-col gap-0.5 pl-1">
                <Heading
                    className="max-w-300 text-ellipsis whitespace-nowrap overflow-hidden"
                    italic
                    variant="h5"
                >
                    {chapterTitle}
                </Heading>
                <Heading className="max-w-300 text-ellipsis whitespace-nowrap overflow-hidden" bold>
                    {bookTitle}
                </Heading>
            </div>
        </Link>
    );
};
