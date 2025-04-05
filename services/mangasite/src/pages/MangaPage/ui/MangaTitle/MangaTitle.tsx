import { memo } from 'react';
import { classNames } from '@packages/model/src/lib/helpers/classNames';
import { Heading } from '@packages/ui/src/shared/Heading';
import { getFlex, HStack, VStack } from '@packages/ui/src/shared/Stack';
import StarSvg from '@packages/ui/src/assets/icon/common/star.svg';
import { Icon } from '@packages/ui/src/shared/Icon';
import { Button } from '@packages/ui/src/shared/Button';
import { getStyleLineClamp } from '@packages/ui/src/shared/StyleHooks';
import { MangaType } from '@packages/model/src/api/manga/types/manga';
import { toShortcutNumber } from '@packages/model/src/lib/helpers/toShortcutNumber/toShortcutNumber';
import cls from './MangaTitle.module.scss';
import { RateModal } from '@/features/RateModal';

interface MangaTitleProps {
    className?: string;
    manga: MangaType;
}

export const MangaTitle = memo((props: MangaTitleProps) => {
    const { className, manga } = props;

    const rateBtn = (
        <Button theme="fill" color="secondary" className={classNames(cls.rateBtn, {}, [getFlex()])}>
            <Icon Svg={StarSvg} width={20} hanging={20} />
            Оценить
        </Button>
    );
    //TODO long
    return (
        <div className={classNames(cls.MangaTitle, {}, [className])}>
            <HStack gap="32" max align="end">
                <VStack max gap="4">
                    <Heading className={getStyleLineClamp()} bold HeadingTag="h2">
                        {manga.title.ru}
                    </Heading>
                    <Heading
                        bold
                        italic
                        className={getStyleLineClamp({ lineClamp: '1' })}
                        HeadingTag="h3"
                    >
                        {manga.title.en}
                    </Heading>
                </VStack>
                <VStack align="end">
                    <HStack gap="4" align="end">
                        <Icon Svg={StarSvg} width={28} hanging={28} />
                        <span className={cls.rate}>{manga.rate}</span>
                        <span className={cls.rateNumber}>{toShortcutNumber(manga.countRate)}</span>
                    </HStack>
                    <RateModal button={rateBtn} />
                </VStack>
            </HStack>
        </div>
    );
});
