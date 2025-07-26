import { StarIcon } from 'lucide-react';
import { memo, ReactNode } from 'react';
import { toShortcutNumber } from '@/shared/lib/helpers/toShortcutNumber';
import { cn } from '@/shared/lib/css';
import { useWindowSize } from '@/shared/kernel/useWindowSize';

type BookRateLayoutProps = {
    className?: string;
    rate: number;
    countRate: number;
    rateButton?: ReactNode;
};

export const BookRateLayout = memo((props: BookRateLayoutProps) => {
    const { className, rate, countRate, rateButton } = props;
    const isWidthLg = useWindowSize.use.isWidthLg();
    return (
        <div
            className={cn(
                'flex justify-center gap-1 items-end flex-col',
                !isWidthLg && 'bg-card py-1 px-1.5 rounded-sm items-center flex-row',
                className,
            )}
        >
            <div className="flex gap-1 items-end justify-end">
                <StarIcon className="stroke-primary fill-primary mb-0.5" size={20} />
                <span className="text-xl leading-5.5">{rate}</span>
                <span className="opacity-80">{toShortcutNumber(countRate)}</span>
            </div>
            {rateButton}
        </div>
    );
});
BookRateLayout.displayName = 'BookRateLayout';
