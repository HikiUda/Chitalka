import { ReactNode } from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cn } from '@/shared/lib/css';
import { useWindowSize } from '@/shared/kernel/useWindowSize';

type AboutBookProps = {
    className?: string;
    basicInfo: ReactNode;
    description: ReactNode;
    categories: ReactNode;
    relatedBooks: ReactNode;
    rateStatistic: ReactNode;
    bookmarkStatistic: ReactNode;
};

export const AboutBook = (props: AboutBookProps) => {
    const {
        className,
        basicInfo,
        description,
        categories,
        relatedBooks,
        rateStatistic,
        bookmarkStatistic,
    } = props;
    const isWidthLg = useWindowSize.use.isWidthLg();
    return (
        <div className={cn('flex flex-col gap-4 w-full', className)}>
            {!isWidthLg && basicInfo}
            <Slot className="px-5">{description}</Slot>
            <Slot className="px-5">{categories}</Slot>
            <Slot className={cn(!isWidthLg ? 'w-[98vw]' : 'w-[calc(100vw-306px)]  max-w-[925px]')}>
                {relatedBooks}
            </Slot>
            <div
                className={cn(
                    'px-4 flex gap-4 ',
                    !isWidthLg ? 'flex-col items-center' : 'items-start justify-center',
                )}
            >
                <Slot className="w-full">{rateStatistic}</Slot>
                <Slot className="w-full">{bookmarkStatistic}</Slot>
            </div>
        </div>
    );
};
