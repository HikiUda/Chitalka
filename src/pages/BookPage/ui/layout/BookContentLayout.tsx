import { FC } from 'react';
import { type TabsType } from '../../model/useBookPageContent';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/shared/ui/kit/tabs';

interface MangaPageContentProps {
    className?: string;
    tabs: TabsType<string>;
    tabValue: string;
    onTabChange: (tab: string) => void;
}

export const BookContentLayout: FC<MangaPageContentProps> = (props) => {
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
                    {tab.content}
                </TabsContent>
            ))}
        </Tabs>
    );
};
