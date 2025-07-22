import { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { AppAdaptiveImage } from '@/shared/ui/AppAdaptiveImage';
import { Heading } from '@/shared/ui/kit/heading';
import { cn } from '@/shared/lib/css';

interface BookCardInlineProps {
    className?: string;
    to?: string;
    img?: string;
    title?: string;
    children?: ReactNode;
}

export const BookCardInline = (props: BookCardInlineProps) => {
    const { className, to = '', img, title, children } = props;

    return (
        <Link
            to={to}
            className={cn(
                'flex h-[100px] gap-2.5 w-full py-1 px-2.5 overflow-hidden',
                `${!to && 'pointer-events-none'}`,
                className,
            )}
        >
            <AppAdaptiveImage className="h-full basis-[65px] shrink-0" img={img} />
            <div className="flex flex-col gap-1 grow justify-around overflow-hidden">
                <Heading
                    className="line-clamp-2 hyphens-auto break-words max-w-[400px] transition-colors hover:text-accent"
                    variant="h4"
                    bold
                >
                    {title}
                </Heading>
                {children}
            </div>
        </Link>
    );
};
