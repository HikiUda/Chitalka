import { FC } from 'react';
import { classNames } from '@packages/model/src/lib/classNames';
import { Slider } from '@packages/ui/src/entities/Slider';
import { CardBlock } from '@packages/ui/src/shared/CardBlock';
import { LastChapterMangaCard } from '@packages/ui/src/entities/MangaCard';
import cls from './RecentUpdatedPopularMangaSlider.module.scss';

interface RecentUpdatedPopularMangaSliderProps {
    className?: string;
}

export const RecentUpdatedPopularMangaSlider: FC<RecentUpdatedPopularMangaSliderProps> = (
    props,
) => {
    const { className } = props;
    const slides = Array(16).fill(<LastChapterMangaCard />);

    return (
        <CardBlock className={classNames(cls.RecentUpdatedPopularMangaSlider, {}, [className])}>
            <Slider className={cls.slider} slides={slides} />
        </CardBlock>
    );
};
