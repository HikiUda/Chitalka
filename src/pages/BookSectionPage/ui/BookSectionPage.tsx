import { ReactNode } from 'react';
import { Page } from '@/shared/ui/layout/Page';
import { cn } from '@/shared/lib/css';
import { useWindowSize } from '@/shared/kernel/useWindowSize';
import { DivSlot } from '@/shared/ui/kit/divslot';

type BookSectionPageProps = {
    mainSlider: ReactNode;
    continueRead: ReactNode;
    nowRead: ReactNode;
    lastUpdatedTabs: ReactNode;
    collections: ReactNode;
    userRating: ReactNode;
};

export const BookSectionPage = (props: BookSectionPageProps) => {
    const { mainSlider, continueRead, nowRead, lastUpdatedTabs, collections, userRating } = props;
    const isWidthLg = useWindowSize.use.isWidthLg();
    const sliderControll = cn('mb-4', !isWidthLg && 'w-[98vw] max-w-299');
    return (
        <Page>
            <DivSlot className={sliderControll}>{mainSlider}</DivSlot>
            <DivSlot className={sliderControll}>{continueRead}</DivSlot>
            <DivSlot className={sliderControll}>{nowRead}</DivSlot>
            <div className="xl:grid xl:grid-cols-2 xl:items-start gap-5 flex flex-col-reverse items-center">
                {lastUpdatedTabs}
                <div className="flex flex-col gap-4 w-full">
                    {collections}
                    {userRating}
                </div>
            </div>
        </Page>
    );
};
