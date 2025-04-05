import { memo } from 'react';
import { classNames } from '@packages/model/src/lib/helpers/classNames';
import { VStack } from '@packages/ui/src/shared/Stack';
import { Heading } from '@packages/ui/src/shared/Heading';
import { LineBookmarkStatistic } from '../LineBookmarkStatistic/LineBookmarkStatistic';
import cls from './MangaBookmarksStatistic.module.scss';

interface MangaBookmarksStatisticProps {
    className?: string;
}

export const MangaBookmarksStatistic = memo((props: MangaBookmarksStatisticProps) => {
    const { className } = props;

    return (
        <VStack max className={classNames(cls.MangaBookmarksStatistic, {}, [className])}>
            <Heading color="primary" HeadingTag="h3">
                В закладках у 9034 пользователей
            </Heading>
            <LineBookmarkStatistic />
            <LineBookmarkStatistic />
            <LineBookmarkStatistic />
            <LineBookmarkStatistic />
            <LineBookmarkStatistic />
        </VStack>
    );
});
