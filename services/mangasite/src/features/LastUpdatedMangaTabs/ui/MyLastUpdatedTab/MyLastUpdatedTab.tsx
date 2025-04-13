import { FC, useState } from 'react';
import { classNames } from '@packages/model/src/lib/helpers/classNames';
import { useQuery } from '@tanstack/react-query';
import { TabScroll } from '../TabScroll/TabScroll';
import { LastUpdatedMangaCardInlineColume } from '@/entities/MangaList';
import { LastUpdatedMangaApi } from '@/shared/api/mangaList';

interface MyLastUpdatedTabProps {
    className?: string;
}

const MyLastUpdatedTab: FC<MyLastUpdatedTabProps> = (props) => {
    const { className } = props;
    const [page, setPage] = useState(1);

    const { data } = useQuery(LastUpdatedMangaApi.getLastUpdatedQueryOptions('my', 10, page));

    return (
        <TabScroll
            page={page}
            setPage={setPage}
            hasNext={!!data?.nextPage}
            className={classNames('', {}, [className])}
        >
            <LastUpdatedMangaCardInlineColume mangaList={data?.data} />
        </TabScroll>
    );
};
export default MyLastUpdatedTab;
