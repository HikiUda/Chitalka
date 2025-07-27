import { ReactNode } from 'react';
import { cn } from '@/shared/lib/css';
import { Heading } from '@/shared/ui/kit/heading';
import { useWindowSize } from '@/shared/kernel/useWindowSize';

type BookTitleProps = {
    className?: string;
    title: string;
    subtitle?: string | null;
    titleInfo: ReactNode;
};

export const BookTitle = (props: BookTitleProps) => {
    const { className, title, subtitle, titleInfo } = props;
    const isWidthLg = useWindowSize.use.isWidthLg();
    return (
        <div className="flex justify-center items-center gap-2 px-4 max-w-100">
            {!isWidthLg && titleInfo}
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
        </div>
    );
};
