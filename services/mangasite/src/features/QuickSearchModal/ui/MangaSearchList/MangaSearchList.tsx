import { memo } from 'react';
import { classNames } from '@packages/model/src/lib/classNames';
import { StatisticsMangaCardInline } from '@packages/ui/src/entities/MangaCard';
import cls from './MangaSearchList.module.scss';

interface MangaSearchListProps {
    className?: string;
}

export const MangaSearchList = memo((props: MangaSearchListProps) => {
    const { className } = props;

    return (
        <div className={classNames(cls.MangaSearchList, {}, [className])}>
            {[1, 2, 3, 4, 5, 6].map((item) => (
                <StatisticsMangaCardInline
                    key={item}
                    views={2080065}
                    likes={35023}
                    inBookmarks={567}
                />
            ))}
        </div>
    );
});
