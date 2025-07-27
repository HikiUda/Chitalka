import { memo, Suspense } from 'react';
import { TabValues, useBookPageContent, type TabsType } from '../../model/useBookPageContent';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/shared/ui/kit/tabs';
import { Loader } from '@/shared/ui/kit/loader';

type BookContentProps = {
    className?: string;
    tabs: TabsType;
    defaultTabValue: TabValues;
};

export const BookContent = memo((props: BookContentProps) => {
    const { className, tabs, defaultTabValue } = props;
    const { tabValue, onTabChange } = useBookPageContent(defaultTabValue);

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
});
BookContent.displayName = 'BookContent';
