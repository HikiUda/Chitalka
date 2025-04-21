import { FC, useEffect } from 'react';
import { classNames } from '@packages/model/src/lib/helpers/classNames';
import { useInfiniteQuery } from '@tanstack/react-query';
import { TabScroll } from '../TabScroll/TabScroll';
import { LastUpdatedMangaCardInlineColume } from '@/entities/MangaList';
import { LastUpdatedMangaApi } from '@/shared/api/mangaList';
import { useClearInfinityPages } from '@packages/model/src/lib/hooks/useClearInfinityPages';

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
            className={classNames('', {}, [className])}
            isFetching={isFetchingNextPage || isFetching}
        >
            <LastUpdatedMangaCardInlineColume mangaList={data} />
        </TabScroll>
    );
};
export default MyLastUpdatedTab;
