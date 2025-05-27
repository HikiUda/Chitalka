import { FC, ReactNode } from 'react';
import { isMobile } from 'react-device-detect';
import { cn } from '@/shared/lib/css';
import { DivSlot } from '@/shared/ui/kit/divslot';

interface AboutMangaLayoutProps {
    className?: string;
    rateStatistic: ReactNode;
    bookmarkStatistic: ReactNode;
    children: ReactNode;
}

export const AboutMangaLayout: FC<AboutMangaLayoutProps> = (props) => {
    const { className, rateStatistic, bookmarkStatistic, children } = props;
    return (
        <div className={cn('flex flex-col gap-4 w-full', className)}>
            {children}
            <div
                className={cn(
                    'px-4 flex gap-4 ',
                    isMobile
                        ? 'flex-col items-center'
                        : 'items-start justify-center max-[991px]:flex-wrap',
                )}
            >
                <DivSlot asChild className="basis-[50%]">
                    {rateStatistic}
                </DivSlot>
                <DivSlot asChild className="basis-[50%]">
                    {bookmarkStatistic}
                </DivSlot>
            </div>
        </div>
    );
};
