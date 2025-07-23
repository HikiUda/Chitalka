import { ReactNode, Suspense } from 'react';
import { BookLoadingContent } from './BookLoadingContent';
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/shared/ui/kit/hover-card';
import { useWindowSize } from '@/shared/kernel/useWindowSize';

type BookHoverCardProps = {
    className?: string;
    trigger: ReactNode;
    content: ReactNode;
};

export const BookHoverCard = (props: BookHoverCardProps) => {
    const { className, trigger, content } = props;
    const isWidthLg = useWindowSize.use.isWidthLg();

    if (!isWidthLg) return trigger;

    return (
        <HoverCard openDelay={1000} closeDelay={700}>
            <HoverCardTrigger className={className} asChild>
                <div>{trigger}</div>
            </HoverCardTrigger>
            <HoverCardContent
                side="right"
                className="w-125 flex flex-col items-start gap-2 px-0 max-h-150 overflow-auto"
            >
                <Suspense fallback={<BookLoadingContent />}>{content}</Suspense>
            </HoverCardContent>
        </HoverCard>
    );
};
