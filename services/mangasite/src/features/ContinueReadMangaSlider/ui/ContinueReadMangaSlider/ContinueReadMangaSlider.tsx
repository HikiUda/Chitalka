import { FC, useMemo } from 'react';
import { classNames } from '@packages/model/src/lib/classNames';
import { Slider } from '@packages/ui/src/entities/Slider';
import { CardBlock } from '@packages/ui/src/shared/CardBlock';
import { Heading } from '@packages/ui/src/shared/Heading';
import {
    MangaCardInlineSkeleton,
    ProgressReadMangaCardInline,
} from '@packages/ui/src/entities/MangaCard';
import { HStack } from '@packages/ui/src/shared/Stack';
import { Button } from '@packages/ui/src/shared/Button';
import { useGetContinueReadManga } from '../../model/api/useGetContinueReadManga';
import { useDeleteContinueReadManga } from '../../model/api/useDeleteContinueReadManga';
import cls from './ContinueReadMangaSlider.module.scss';

interface ContinueReadMangaSliderProps {
    className?: string;
}

export const ContinueReadMangaSlider: FC<ContinueReadMangaSliderProps> = (props) => {
    const { className } = props;
    const { data, isLoading } = useGetContinueReadManga();
    const { deleteContinueReadManga } = useDeleteContinueReadManga();
    const slides = useMemo(() => {
        if (!data && isLoading) {
            return Array(4).fill(
                <CardBlock className={cls.cardBlockSkeleton}>
                    <MangaCardInlineSkeleton />
                </CardBlock>,
            );
        }
        if (!data) return [];
        return data.map((manga) => (
            <ProgressReadMangaCardInline
                onDelete={deleteContinueReadManga}
                key={manga.id}
                manga={manga}
            />
        ));
    }, [data, isLoading, deleteContinueReadManga]);

    if (!isLoading && !data?.length) return null;
    return (
        <CardBlock className={classNames(cls.ContinueReadMangaSlider, {}, [className])}>
            <HStack justify="between" className={cls.title}>
                <Heading HeaderTag="h2" color="primary">
                    Продолжить читать
                </Heading>
                <Button
                    onPress={() => deleteContinueReadManga(0)}
                    theme="clear"
                    noHover
                    className={cls.clean}
                >
                    очистить
                </Button>
            </HStack>
            <Slider className={cls.slider} slides={slides} />
        </CardBlock>
    );
};
