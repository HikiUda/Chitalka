import { FC } from 'react';
import { classNames } from '@packages/model/src/lib/classNames';
import { getFlex } from '@packages/ui/src/shared/Stack';
import { Heading } from '@packages/ui/src/shared/Heading';
import { Slider } from '@packages/ui/src/entities/Slider';
import { PrimaryMangaCardInline } from '@packages/ui/src/entities/MangaCard';
import cls from './SimilarMangaSlider.module.scss';

interface SimilarMangaSliderProps {
    className?: string;
}

export const SimilarMangaSlider: FC<SimilarMangaSliderProps> = (props) => {
    const { className } = props;
    const slides = Array(8).fill(<PrimaryMangaCardInline />);
    return (
        <div
            className={classNames(cls.SimilarMangaSlider, {}, [
                className,
                getFlex({ direction: 'column', max: true, align: 'start' }),
            ])}
        >
            <Heading className={cls.title} HeadingTag="h3" color="primary">
                Связаное
            </Heading>

            <Slider className={cls.slider} slides={slides} />
        </div>
    );
};
