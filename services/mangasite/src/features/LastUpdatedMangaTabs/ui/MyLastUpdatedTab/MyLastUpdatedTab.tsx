import { FC } from 'react';
import { classNames } from '@packages/model/src/lib/classNames';
import { LastUpdatedMangaCardInlineColume } from '@packages/ui/src/entities/MangaList';
import { TabScroll } from '../TabScroll/TabScroll';
import { useGetLastUpdatedMangas } from '@/shared/api/useGetLastUpdatedMangas';

interface MyLastUpdatedTabProps {
    className?: string;
}

export const MyLastUpdatedTab: FC<MyLastUpdatedTabProps> = (props) => {
    const { className } = props;

    const { data, fetchNextPage, hasNextPage, isFetchingNextPage, isFetching } =
        useGetLastUpdatedMangas('my');

    return (
        <TabScroll
            disabled={!hasNextPage}
            callback={() => fetchNextPage()}
            className={classNames('', {}, [className])}
            isFetching={isFetchingNextPage || isFetching}
        >
            <LastUpdatedMangaCardInlineColume mangaList={data} />
        </TabScroll>
    );
};
