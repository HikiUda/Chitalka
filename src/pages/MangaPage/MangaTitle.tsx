import { cn } from '@/shared/lib/css';
import { Heading } from '@/shared/ui/kit/heading';

interface MangaTitleProps {
    className?: string;
    title: string;
    subtitle?: string | null;
}

export const MangaTitle = (props: MangaTitleProps) => {
    const { className, title, subtitle } = props;

    return (
        <div className={cn('flex flex-col justify-center items-start w-full gap-1', className)}>
            <Heading className="line-clamp-2 hyphens-auto break-all" weigth="semibold" variant="h2">
                {title}
            </Heading>
            {subtitle && (
                <Heading
                    className="line-clamp-1 hyphens-auto break-all"
                    weigth="semibold"
                    variant="h3"
                    italic
                >
                    {subtitle}
                </Heading>
            )}
        </div>
    );
};
