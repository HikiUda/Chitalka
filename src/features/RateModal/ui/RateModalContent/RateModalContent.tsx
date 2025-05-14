import { FC, useMemo, useState } from 'react';
import { classNames } from '@/shared/lib/helpers/classNames';
import { HStack, VStack } from '@/shared/ui/Stack';
import { Heading } from '@/shared/ui/Heading';
import StarSvg from '@/shared/assets/icon/common/star.svg';
import { Icon } from '@/shared/ui/Icon';
import { MangaIdType } from '@/shared/kernel/manga';
import { useQuery } from '@tanstack/react-query';
import { Button } from '@/shared/ui/Button';
import { Loader } from '@/shared/ui/Loader';
import { isMobile } from 'react-device-detect';
import { useSetMangaRate } from '../../model/api/useSetRate';
import cls from './RateModalContent.module.scss';
import { RateMangaApi } from '@/shared/api/deprecated/individualManga';

interface RateModalContentProps {
    className?: string;
    mangaId: MangaIdType;
}

const RateModalContent: FC<RateModalContentProps> = (props) => {
    const { className, mangaId } = props;
    const [selectedStar, setSelectedStar] = useState(0);

    const { setRate, isPending } = useSetMangaRate(mangaId);
    const { data, isLoading } = useQuery(RateMangaApi.getUserRateQueryOptions(mangaId));

    const rating = useMemo(() => [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], []);

    if (isLoading) return <Loader />;
    return (
        <VStack
            gap="16"
            align="center"
            className={classNames(cls.RateModalContent, {}, [className])}
        >
            <Heading HeadingTag="h3">Оценка тайтла</Heading>
            <Heading HeadingTag="h2">{selectedStar || data?.rate || 'Её пока нет'}</Heading>
            <HStack justify="center" gap="4">
                {rating.map((rate, ind) => (
                    <Button
                        isDisabled={isPending}
                        key={ind}
                        theme="clear"
                        noHover
                        onPress={() => setSelectedStar(rate)}
                    >
                        <Icon
                            className={classNames('', {
                                [cls.selectedStar]: !(ind < (selectedStar || data?.rate || 0)),
                            })}
                            size={isMobile ? 22 : 40}
                            Svg={StarSvg}
                        />
                    </Button>
                ))}
            </HStack>
            <HStack gap="16" className={cls.buttons}>
                <Button slot="close" noHover>
                    Назад
                </Button>
                {data?.rate === selectedStar || (data?.rate && !selectedStar) ? (
                    <Button
                        isDisabled={isPending}
                        onPress={() => setRate(0)}
                        theme="fill"
                        color="secondary"
                        slot="close"
                    >
                        Удалить
                    </Button>
                ) : (
                    <Button
                        isDisabled={isPending || !selectedStar}
                        onPress={() => setRate(selectedStar)}
                        theme="fill"
                        slot="close"
                    >
                        {data?.rate ? 'Изменить' : 'Поставить'}
                    </Button>
                )}
            </HStack>
        </VStack>
    );
};
export default RateModalContent;
