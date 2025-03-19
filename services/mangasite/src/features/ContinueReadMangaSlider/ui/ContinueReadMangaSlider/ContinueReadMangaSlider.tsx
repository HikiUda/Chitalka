import { FC } from 'react';
import { classNames } from '@packages/model/src/lib/classNames';
import { Slider } from '@packages/ui/src/entities/Slider';
import { CardBlock } from '@packages/ui/src/shared/CardBlock';
import { Heading } from '@packages/ui/src/shared/Heading';
import { ProgressReadMangaCardInline } from '@packages/ui/src/entities/MangaCard';
import { HStack } from '@packages/ui/src/shared/Stack';
import cls from './ContinueReadMangaSlider.module.scss';

interface ContinueReadMangaSliderProps {
    className?: string;
}

export const ContinueReadMangaSlider: FC<ContinueReadMangaSliderProps> = (props) => {
    const { className } = props;
    const slides = Array(8).fill(<ProgressReadMangaCardInline />);
    return (
        <CardBlock className={classNames(cls.ContinueReadMangaSlider, {}, [className])}>
            <HStack justify="between" className={cls.title}>
                <Heading HeaderTag="h2" color="primary">
                    Продолжить читать
                </Heading>
                <span className={cls.clean}>очистить</span>
            </HStack>
            <Slider className={cls.slider} slides={slides} />
        </CardBlock>
    );
};
