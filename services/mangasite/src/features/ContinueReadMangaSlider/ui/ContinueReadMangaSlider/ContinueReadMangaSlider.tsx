import { FC, useMemo } from 'react';
import { classNames } from '@packages/model/src/lib/helpers/classNames';
import { CardBlock } from '@packages/ui/src/shared/CardBlock';
import { Heading } from '@packages/ui/src/shared/Heading';
import { HStack } from '@packages/ui/src/shared/Stack';
import { Button } from '@packages/ui/src/shared/Button';
import { useQuery } from '@tanstack/react-query';
import { UserDataApi } from '@packages/model/src/api/user';
import { useDeleteContinueReadManga } from '../../model/api/useDeleteContinueReadManga';
import { ContinueReadMangaApi } from '../../model/api/continueReadMangaApi';
import cls from './ContinueReadMangaSlider.module.scss';
import { MangaCardInlineSkeleton, ProgressReadMangaCardInline } from '@/entities/MangaCard';
import { Slider } from '@/entities/Slider';

interface ContinueReadMangaSliderProps {
    className?: string;
}

export const ContinueReadMangaSlider: FC<ContinueReadMangaSliderProps> = (props) => {
    const { className } = props;
    const { data, isLoading } = useQuery(ContinueReadMangaApi.getContinueReadMangaQueryOptions());
    const user = useQuery(UserDataApi.getUserDataQueryOptions());

    const { deleteContinueReadManga, getIsPending } = useDeleteContinueReadManga();
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
                isDisabled={getIsPending(manga.id)}
                key={manga.id}
                manga={manga}
            />
        ));
    }, [data, isLoading, deleteContinueReadManga, getIsPending]);
    if (!user.data) return null;
    if (!isLoading && !data?.length) return null;
    return (
        <CardBlock className={classNames(cls.ContinueReadMangaSlider, {}, [className])}>
            <HStack justify="between" className={cls.title}>
                <Heading HeadingTag="h2" color="primary">
                    Продолжить читать
                </Heading>
                <Button
                    onPress={() => deleteContinueReadManga(0)}
                    theme="clear"
                    noHover
                    className={cls.clean}
                    isDisabled={isLoading || getIsPending(0)}
                >
                    очистить
                </Button>
            </HStack>
            <Slider className={cls.slider} slides={slides} />
        </CardBlock>
    );
};
