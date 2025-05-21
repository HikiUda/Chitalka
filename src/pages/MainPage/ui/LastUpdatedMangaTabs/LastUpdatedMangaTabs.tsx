import { FC } from 'react';
import { Link } from 'react-router-dom';
import { formatDistanceToNow } from 'date-fns';
import { ru } from 'date-fns/locale';
import { useLastUpdatedMangaTabs } from './useLastUpdatedMangaTabs';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/shared/ui/kit/tabs';
import { MangaCardInline, MangaListLayout } from '@/entities/ComicList';
import { Button } from '@/shared/ui/kit/button';
import { Heading } from '@/shared/ui/kit/heading';
import { useSession } from '@/shared/api/session';
import { getRoute } from '@/shared/kernel/router';
import { cn } from '@/shared/lib/css';

interface LastUpdatedMangaTabsProps {
    className?: string;
}

export const LastUpdatedMangaTabs: FC<LastUpdatedMangaTabsProps> = (props) => {
    const { className } = props;

    const tabs = useLastUpdatedMangaTabs();
    const session = useSession((state) => state.session);

    return (
        <div className={cn('px-3 w-full', className)}>
            <Heading variant="h2" className="mb-2">
                Последнии обновления
            </Heading>
            <Tabs defaultValue={tabs[0].value} className="p-2 bg-card rounded-xl border shadow-sm">
                <TabsList>
                    {tabs.map((tab) => {
                        if (tab.authOnly && !session) return null;
                        return (
                            <TabsTrigger key={tab.value} value={tab.value}>
                                {tab.title}
                            </TabsTrigger>
                        );
                    })}
                </TabsList>
                {tabs.map((tab) => {
                    if (tab.authOnly && !session) return null;
                    console.log(tab);
                    return (
                        <TabsContent key={tab.value} value={tab.value}>
                            <MangaListLayout
                                list={tab.data}
                                renderItem={(manga, ind) => (
                                    <MangaCardInline
                                        className={`${ind < tab.data.length - 1 && 'border-b-1 border-b-primary'}  mb-2`}
                                        key={ind}
                                        to={getRoute.manga(manga.urlId)}
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
                                    </MangaCardInline>
                                )}
                                isLoading={tab.isFetching}
                                skeletonsCount={10}
                                action={
                                    tab.hasNextPage ? (
                                        <Button
                                            onClick={() => tab.fetchNextPage()}
                                            className="w-full"
                                        >
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
                    );
                })}
            </Tabs>
        </div>
    );
};
