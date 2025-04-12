import { memo } from 'react';
import { Heading } from '@packages/ui/src/shared/Heading';
import { useQuery } from '@tanstack/react-query';
import { MangaIdType } from '@packages/model/src/entities/manga';
import { VStack } from '@packages/ui/src/shared/Stack';
import { classNames } from '@packages/model/src/lib/helpers/classNames';
import { LineBookmarkStatistic } from '../LineBookmarkStatistic/LineBookmarkStatistic';
import { MangaBookmarkStatisticApi } from '../../model/api/mangaBookmarkStatisticApi';
import cls from './MangaBookmarksStatistic.module.scss';

interface MangaBookmarksStatisticProps {
    className?: string;
    mangaId: MangaIdType;
}

export const MangaBookmarksStatistic = memo((props: MangaBookmarksStatisticProps) => {
    const { className, mangaId } = props;

    const { data, isLoading } = useQuery(MangaBookmarkStatisticApi.getQueryOptions(mangaId));

    if (!data || isLoading) return <div>Loading...</div>;

    return (
        <VStack className={classNames(cls.MangaBookmarksStatistic, {}, [className])}>
            <Heading color="primary" HeadingTag="h3">
                В закладках у {data.all} пользователей
            </Heading>
            <div className={cls.MangaBookmarksStatistic}>
                {data.bookmarks.map((stat) => (
                    <LineBookmarkStatistic
                        key={stat.title}
                        title={stat.title}
                        percent={stat.percentage}
                        count={stat.count}
                    />
                ))}
            </div>
        </VStack>
    );
});
