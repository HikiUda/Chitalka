import { ReactNode, Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { TabValues, useBookContent } from '../../model/useBookContent';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/shared/ui/kit/tabs';
import { Loader } from '@/shared/ui/kit/loader';

type BookContentProps = {
    className?: string;
} & Record<TabValues, ReactNode>;

export const BookContent = (props: BookContentProps) => {
    const { className, info, chapters, comments } = props;
    const { tabValue, onTabChange } = useBookContent();

    return (
        <Tabs className={className} value={tabValue} onValueChange={onTabChange}>
            <TabsList className="w-full justify-start">
                <TabsTrigger value={TabValues[0]}>О тайтле</TabsTrigger>
                <TabsTrigger value={TabValues[1]}>Главы</TabsTrigger>
                <TabsTrigger value={TabValues[2]}>Комментарии</TabsTrigger>
            </TabsList>
            <ErrorBoundary fallback={<div>Что то пошло не так, лол.</div>}>
                <Suspense fallback={<Loader variant="flower" className="mx-auto" />}>
                    <TabsContent value={TabValues[0]}>{info}</TabsContent>
                    <TabsContent value={TabValues[1]}>{chapters}</TabsContent>
                    <TabsContent value={TabValues[2]}>{comments}</TabsContent>
                </Suspense>
            </ErrorBoundary>
        </Tabs>
    );
};
