import { cva, type VariantProps } from 'class-variance-authority';
import { Link } from 'react-router-dom';
import { Heading } from '@/shared/ui/kit/heading';
import { Skeleton } from '@/shared/ui/kit/skeleton';
import { AppAdaptiveImage } from '@/shared/ui/AppAdaptiveImage';
import { cn } from '@/shared/lib/css';

export const bookCardVariants = cva('block', {
    variants: {
        adaptive: {
            media: 'w-[115px] md:w-[135px]',
            dynamic: 'w-full',
        },
    },
    defaultVariants: {
        adaptive: 'media',
    },
});

type BookCardProps = {
    className?: string;
    to?: string;
    img?: string;
    title?: string;
    subtitle?: string;
    label1?: string | number | null;
    label2?: string | number | null;
    label3?: string | number | null;
} & VariantProps<typeof bookCardVariants>;

export const BookCard = (props: BookCardProps) => {
    const { className, adaptive, to = '', img, title, subtitle, label1, label2, label3 } = props;
    return (
        <Link
            to={to}
            className={cn(
                bookCardVariants({ adaptive }),
                `${!to && 'pointer-events-none'}`,
                className,
            )}
        >
            <AppAdaptiveImage
                loadFallback={<Skeleton className="inset-0 absolute" />}
                className="w-full pb-[141%]"
                img={img}
            >
                {label1 && (
                    <span className="absolute top-2 -left-1 min-w-[30px] max-w-[40px] text-ellipsis text-center bg-primary text-sm px-1 py-0.5 rounded-xs overflow-hidden whitespace-nowrap">
                        {label1}
                    </span>
                )}
                {label2 && (
                    <span className="absolute top-2 right-1 max-w-[60px] text-ellipsis overflow-hidden text-center bg-secondary text-sm px-1 py-0.5 rounded-xs whitespace-nowrap">
                        {label2}
                    </span>
                )}
                {label3 && (
                    <span className="absolute bottom-2.5 left-1 max-w-[70px] text-ellipsis text-white bg-[rgba(0,0,0,0.6)] text-sm text-center px-1 py-0.5 rounded-xs overflow-hidden whitespace-nowrap">
                        {label3}
                    </span>
                )}
            </AppAdaptiveImage>

            <Heading
                className="hyphens-auto line-clamp-2 hover:text-secondary transition-colors"
                weigth="semibold"
            >
                {title}
            </Heading>
            <Heading variant="h5" className="line-clamp-1 overflow-hidden opacity-80">
                {subtitle}
            </Heading>
        </Link>
    );
};
