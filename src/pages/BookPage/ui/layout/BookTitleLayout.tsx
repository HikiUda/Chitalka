import { cn } from '@/shared/lib/css';
import { Heading } from '@/shared/ui/kit/heading';

type BookTitleLayoutProps = {
    className?: string;
    title: string;
    subtitle?: string | null;
};

export const BookTitleLayout = (props: BookTitleLayoutProps) => {
    const { className, title, subtitle } = props;

    return (
        <div className={cn('flex flex-col justify-center items-start w-full gap-1', className)}>
            <Heading className="line-clamp-2 hyphens-auto break-all" bold variant="h2">
                {title}
            </Heading>
            {subtitle && (
                <Heading
                    className="line-clamp-1 pr-1 hyphens-auto break-all"
                    bold
                    variant="h3"
                    italic
                >
                    {subtitle}
                </Heading>
            )}
        </div>
    );
};
