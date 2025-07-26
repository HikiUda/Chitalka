import { Link } from 'react-router-dom';
import { formatDistanceToNow } from 'date-fns';
import { ru } from 'date-fns/locale';
import { memo } from 'react';
import { BookLastUpdatedTab } from '../model/useBookLastUpdatedTabs/useBookLastUpdatedTabs';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/shared/ui/kit/tabs';
import { BookCardInline, BookListLayout } from '@/entities/BookList';
import { Button } from '@/shared/ui/kit/button';
import { Heading } from '@/shared/ui/kit/heading';
import { useSession } from '@/shared/kernel/session';
import { cn } from '@/shared/lib/css';

type BookLastUpdatedTabsProps = {
    className?: string;
    all: BookLastUpdatedTab;
    my: BookLastUpdatedTab;
};

export const BookLastUpdatedTabs = memo((props: BookLastUpdatedTabsProps) => {
    const { className, all, my } = props;
    const { isUserAuth } = useSession();
    const tabs = [all].concat(isUserAuth ? my : []);
    return (
        <div className={cn(' w-full', className)}>
            <Heading variant="h2" color="primary" className="mb-2">
                Последнии обновления
            </Heading>
            <Tabs defaultValue={tabs[0].value} className="p-2 bg-card rounded-xl border shadow-sm">
                <TabsList>
                    {tabs.map((tab) => (
                        <TabsTrigger key={tab.value} value={tab.value}>
                            {tab.title}
                        </TabsTrigger>
                    ))}
                </TabsList>
                {tabs.map((tab) => (
                    <TabsContent key={tab.value} value={tab.value}>
                        <BookListLayout
                            list={tab.data}
                            renderItem={(manga, ind) => (
                                <BookCardInline
                                    className={`${ind < tab.data.length - 1 && 'border-b-1 border-b-primary'}  mb-2`}
                                    key={ind}
                                    to={tab.bookLink(manga.urlId, manga)}
                                    img={manga.cover}
                                    title={manga.title}
                                >
                                    <span className="text-sm">
                                        Tome {manga.tome} Chapter {manga.chapter}
                                    </span>
                                    <span className="text-sm opacity-80">
                                        {formatDistanceToNow(new Date(manga.chapterCreatedAt), {
                                            locale: ru,
                                            addSuffix: true,
                                        })}
                                    </span>
                                </BookCardInline>
                            )}
                            isLoading={tab.isFetching}
                            skeletonsCount={10}
                            action={
                                tab.hasNextPage ? (
                                    <Button onClick={() => tab.fetchNextPage()} className="w-full">
                                        Показать ещё
                                    </Button>
                                ) : (
                                    <Button asChild className="w-full">
                                        <Link to={tab.catalogLink}>В каталог</Link>
                                    </Button>
                                )
                            }
                        />
                    </TabsContent>
                ))}
            </Tabs>
        </div>
    );
});
BookLastUpdatedTabs.displayName = 'BookLastUpdatedTabs';
