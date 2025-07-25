import { ReactNode } from 'react';
import { cn } from '@/shared/lib/css';
import { DivSlot } from '@/shared/ui/kit/divslot';
import { useWindowSize } from '@/shared/kernel/useWindowSize';

type AboutBookLayoutProps = {
    className?: string;
    rateStatistic: ReactNode;
    bookmarkStatistic: ReactNode;
    children: ReactNode;
};

export const AboutBookLayout = (props: AboutBookLayoutProps) => {
    const { className, rateStatistic, bookmarkStatistic, children } = props;
    const isWidthLg = useWindowSize.use.isWidthLg();
    return (
        <div className={cn('flex flex-col gap-4 w-full', className)}>
            {children}
            <div
                className={cn(
                    'px-4 flex gap-4 ',
                    !isWidthLg
                        ? 'flex-col items-center'
                        : 'items-start justify-center max-[991px]:flex-wrap',
                )}
            >
                <DivSlot
                    asChild
                    className={cn(!isWidthLg ? 'w-full' : 'basis-[50%] max-[991px]:basis-[100%]')}
                >
                    {rateStatistic}
                </DivSlot>
                <DivSlot
                    asChild
                    className={cn(!isWidthLg ? 'w-full' : 'basis-[50%] max-[991px]:basis-[100%]')}
                >
                    {bookmarkStatistic}
                </DivSlot>
            </div>
        </div>
    );
};
