import { ReactNode } from 'react';
import { isMobile } from 'react-device-detect';
import { Page } from '@/shared/ui/layout/Page';

import { cn } from '@/shared/lib/css';
import { Card } from '@/shared/ui/kit/card';

interface CatalogPageProps {
    input: ReactNode;
    sortByOrder: ReactNode;
    list: ReactNode;
    title: ReactNode;
    filters: ReactNode;
}

export const CatalogPageLayout = (props: CatalogPageProps) => {
    const { input, sortByOrder, list, title, filters } = props;

    return (
        <Page>
            <div className={cn('grid', isMobile ? 'grid-cols-1' : 'grid-cols-[1fr_330px] gap-4')}>
                <Card className="px-3">
                    <div className="flex gap-2 items-center justify-between">
                        {title}
                        {!isMobile && sortByOrder}
                    </div>
                    {input}
                    {list}
                </Card>
                {!isMobile && (
                    <div className="sticky w-[330px] max-h-[calc(100vh-88px)] top-17 shadow-sm rounded-xl border">
                        {filters}
                    </div>
                )}
            </div>
        </Page>
    );
};
