import { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { AppAdaptiveImage } from '@/shared/ui/AppAdaptiveImage';
import { Heading } from '@/shared/ui/kit/heading';
import { cn } from '@/shared/lib/css';

interface MangaCardInlineProps {
    className?: string;
    to?: string;
    img?: string;
    title?: string;
    subtitle?: string;
    children?: ReactNode;
}

export const MangaCardInline = (props: MangaCardInlineProps) => {
    const { className, to = '', img, title, subtitle, children } = props;

    return (
        <Link
            to={to}
            className={cn(
                'flex h-[100px] gap-2.5 w-full py-1 px-2.5',
                `${!to && 'pointer-events-none'}`,
                className,
            )}
        >
            <AppAdaptiveImage className="h-full basis-[65px]" img={img} />
            <div className="flex flex-col gap-1 grow justify-around">
                <Heading
                    className="line-clamp-2 hyphens-auto break-words max-w-[400px] transition-colors hover:text-accent"
                    variant="h4"
                    weigth="semibold"
                >
                    {title}
                </Heading>
                <Heading
                    variant="h5"
                    className="max-w-[300px] text-sm opacity-80 text-ellipsis whitespace-nowrap"
                >
                    {subtitle}
                </Heading>
                {children}
            </div>
        </Link>
    );
};
