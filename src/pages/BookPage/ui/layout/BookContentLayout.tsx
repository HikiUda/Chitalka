import { Suspense } from 'react';
import { type TabsType } from '../../model/useBookPageContent';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/shared/ui/kit/tabs';
import { Loader } from '@/shared/ui/kit/loader';

type MangaPageContentProps = {
    className?: string;
    tabs: TabsType<string>;
    tabValue: string;
    onTabChange: (tab: string) => void;
};

export const BookContentLayout = (props: MangaPageContentProps) => {
    const { className, tabs, tabValue, onTabChange } = props;

    return (
        <Tabs className={className} value={tabValue} onValueChange={onTabChange}>
            <TabsList className="w-full justify-start">
                {tabs.map((tab) => (
                    <TabsTrigger key={tab.value} value={tab.value}>
                        {tab.title}
                    </TabsTrigger>
                ))}
            </TabsList>
            {tabs.map((tab) => (
                <TabsContent key={tab.value} value={tab.value}>
                    <Suspense fallback={<Loader variant="flower" className="mx-auto" />}>
                        {tab.content}
                    </Suspense>
                </TabsContent>
            ))}
        </Tabs>
    );
};
