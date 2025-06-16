import { ReactNode, Suspense } from 'react';
import { isMobile } from 'react-device-detect';
import { BookLoadingContent } from './BookLoadingContent';
import { HoverCard, HoverCardBody, HoverCardTrigger } from '@/shared/ui/kit/hover-card';

interface BookHoverCardProps {
    className?: string;
    trigger: ReactNode;
    content: ReactNode;
}

export const BookHoverCard = (props: BookHoverCardProps) => {
    const { className, trigger, content } = props;

    if (isMobile) return trigger;

    return (
        <HoverCard openDelay={1000} closeDelay={700}>
            <HoverCardTrigger className={className} asChild>
                <div>{trigger}</div>
            </HoverCardTrigger>
            <HoverCardBody
                side="right"
                className="w-125 flex flex-col items-start gap-2 px-0 max-h-150 overflow-auto"
            >
                <Suspense fallback={<BookLoadingContent />}>{content}</Suspense>
            </HoverCardBody>
        </HoverCard>
    );
};
