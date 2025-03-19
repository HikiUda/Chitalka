import { FC } from 'react';
import { classNames } from '@packages/model/src/lib/classNames';
import { LastUpdatedMangaCardInlineColume } from '@packages/ui/src/entities/MangaList';
import { TabScroll } from '../TabScroll/TabScroll';

interface MyLastUpdatedTabProps {
    className?: string;
}

export const MyLastUpdatedTab: FC<MyLastUpdatedTabProps> = (props) => {
    const { className } = props;

    return (
        <TabScroll className={classNames('', {}, [className])}>
            <LastUpdatedMangaCardInlineColume mangaList={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]} />
        </TabScroll>
    );
};
