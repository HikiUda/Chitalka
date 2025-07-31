import { ReactNode, Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { TabValues, useBookContent } from '../../model/useBookContent';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/shared/ui/kit/tabs';
import { Loader } from '@/shared/ui/kit/loader';
import { createI18nModule } from '@/shared/kernel/i18n';

type BookContentProps = {
    className?: string;
} & Record<TabValues, ReactNode>;

const { useI18n } = createI18nModule({
    about: { ru: 'О тайтле', en: 'About' },
    chapters: { ru: 'Главы', en: 'Chapters' },
    comments: { ru: 'Комментарии', en: 'Comments' },
    error: { ru: 'Что-то пошло не так, лол.', en: 'Something went wrong, lol.' },
});

export const BookContent = (props: BookContentProps) => {
    const { className, info, chapters, comments } = props;
    const t = useI18n();
    const { tabValue, onTabChange } = useBookContent();

    return (
        <Tabs className={className} value={tabValue} onValueChange={onTabChange}>
            <TabsList className="w-full justify-start">
                <TabsTrigger value={TabValues[0]}>{t('about')}</TabsTrigger>
                <TabsTrigger value={TabValues[1]}>{t('chapters')}</TabsTrigger>
                <TabsTrigger value={TabValues[2]}>{t('comments')}</TabsTrigger>
            </TabsList>
            <ErrorBoundary fallback={<div>{t('error')}</div>}>
                <Suspense fallback={<Loader variant="flower" className="mx-auto" />}>
                    <TabsContent value={TabValues[0]}>{info}</TabsContent>
                    <TabsContent value={TabValues[1]}>{chapters}</TabsContent>
                    <TabsContent value={TabValues[2]}>{comments}</TabsContent>
                </Suspense>
            </ErrorBoundary>
        </Tabs>
    );
};
