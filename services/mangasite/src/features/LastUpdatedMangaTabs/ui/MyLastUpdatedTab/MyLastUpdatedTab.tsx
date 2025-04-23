import { FC, useEffect } from 'react';
import { useInfiniteQuery } from '@tanstack/react-query';
import { useClearInfinityPages } from '@packages/model/src/lib/hooks/useClearInfinityPages';
import { TabScroll } from '../TabScroll/TabScroll';
import cls from './MyLastUpdatedTab.module.scss';
import { MangaCardInlineColumn } from '@/entities/MangaList';
import { LastUpdatedMangaApi } from '@/shared/api/mangaList';
import { LastUpdatedMangaCardInline } from '@/entities/MangaCard';

interface MyLastUpdatedTabProps {
    className?: string;
}

const MyLastUpdatedTab: FC<MyLastUpdatedTabProps> = (props) => {
    const { className } = props;

    const { data, fetchNextPage, hasNextPage, isFetchingNextPage, isFetching } = useInfiniteQuery(
        LastUpdatedMangaApi.getLastUpdatedInfinityQueryOptions('my'),
    );
    const clearPages = useClearInfinityPages(
        LastUpdatedMangaApi.getLastUpdatedInfinityQueryOptions('my').queryKey,
    );

    useEffect(() => {
        return () => {
            clearPages();
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <TabScroll
            disabled={!hasNextPage || (data?.length || 1) >= 50}
            callback={() => fetchNextPage()}
            className={className}
        >
            <MangaCardInlineColumn
                list={data || []}
                renderItem={(manga, ind) => (
                    <LastUpdatedMangaCardInline
                        key={ind}
                        manga={manga}
                        className={data?.length === ind + 1 ? '' : cls.card}
                    />
                )}
                isLoading={isFetchingNextPage || isFetching}
                skeletonsCount={10}
            />
        </TabScroll>
    );
};
export default MyLastUpdatedTab;
