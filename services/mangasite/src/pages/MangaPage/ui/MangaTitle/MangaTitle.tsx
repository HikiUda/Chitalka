import { memo } from 'react';
import { classNames } from '@packages/model/src/lib/classNames';
import { Heading } from '@packages/ui/src/shared/Heading';
import { getFlex, HStack, VStack } from '@packages/ui/src/shared/Stack';
import StarSvg from '@packages/ui/src/assets/icon/common/star.svg';
import { Icon } from '@packages/ui/src/shared/Icon';
import { Button } from '@packages/ui/src/shared/Button';
import { getStyleLineClamp } from '@packages/ui/src/shared/StyleHooks';
import cls from './MangaTitle.module.scss';
import { RateModal } from '@/features/RateModal';

interface MangaTitleProps {
    className?: string;
}

export const MangaTitle = memo((props: MangaTitleProps) => {
    const { className } = props;

    const rateBtn = (
        <Button theme="fill" color="secondary" className={classNames(cls.rateBtn, {}, [getFlex()])}>
            <Icon Svg={StarSvg} width={20} hanging={20} />
            Оценить
        </Button>
    );

    return (
        <div className={classNames(cls.MangaTitle, {}, [className])}>
            <HStack gap="32" max align="end">
                <VStack max gap="4">
                    <Heading className={getStyleLineClamp()} style="bold" HeaderTag="h2">
                        Title of Manga
                    </Heading>
                    <Heading className={getStyleLineClamp({ lineClamp: '1' })} HeaderTag="h3">
                        eng Title of Manga
                    </Heading>
                </VStack>
                <VStack align="end">
                    <HStack gap="4" align="end">
                        <Icon Svg={StarSvg} width={28} hanging={28} />
                        <span className={cls.rate}>9.5</span>
                        <span className={cls.rateNumber}>12.5mil</span>
                    </HStack>
                    <RateModal button={rateBtn} />
                </VStack>
            </HStack>
        </div>
    );
});
