import { FC } from 'react';
import { classNames } from '@packages/model/src/lib/helpers/classNames';
import { getFlex, HStack, VStack } from '@packages/ui/src/shared/Stack';
import { Button } from '@packages/ui/src/shared/Button';
import ArrowSvg from '@packages/ui/src/assets/icon/common/arrow.svg';
import { Icon } from '@packages/ui/src/shared/Icon';
import { RateCountRange } from '../Range/RateCountRange/RateCountRange';
import { RateRange } from '../Range/RateRange/RateRange';
import { ChapterCountRange } from '../Range/ChapterCountRange/ChapterCountRange';
import { AgeRateRange } from '../Range/AgeRateRange/AgeRateRange';
import { MangaTypeCheckbox } from '../Checkbox/MangaTypeCheckbox/MangaTypeCheckbox';
import { MangaStatusCheckbox } from '../Checkbox/MangaStatusCheckbox/MangaStatusCheckbox';
import { BookmarksCheckbox } from '../Checkbox/BookmarksCheckbox/BookmarksCheckbox';
import { ReleaseDateRange } from '../Range/ReleaseDateRange/ReleaseDateRange';
import { useCatalogFiltersStore } from '../../model/store/catalogFiltersStore';
import cls from './CommonFilters.module.scss';

interface CommonFiltersProps {
    className?: string;
    showTags?: () => void;
    showGenres?: () => void;
    onApply?: () => void;
}

export const CommonFilters: FC<CommonFiltersProps> = (props) => {
    const { className, showGenres, showTags, onApply } = props;

    const resetAll = useCatalogFiltersStore.use.resetAll();

    return (
        <VStack justify="start" className={classNames(cls.CommonFilters, {}, [className])}>
            <VStack justify="start" gap="16" className={cls.list}>
                <Button
                    theme="clear"
                    noHover
                    className={getFlex({ justify: 'between', flexShrink: false, max: true })}
                    onPress={showGenres}
                >
                    К жанрам <Icon Svg={ArrowSvg} size={15} />
                </Button>
                <Button
                    theme="clear"
                    noHover
                    className={getFlex({ justify: 'between', flexShrink: false, max: true })}
                    onPress={showTags}
                >
                    К тегам <Icon Svg={ArrowSvg} size={15} />
                </Button>
                <RateCountRange />
                <RateRange />
                <ChapterCountRange />
                <AgeRateRange />
                <ReleaseDateRange />
                <MangaTypeCheckbox />
                <MangaStatusCheckbox />
                <BookmarksCheckbox />
            </VStack>
            <HStack justify="around" max>
                <Button theme="fill" onPress={onApply}>
                    Применить
                </Button>
                <Button theme="fill" color="secondary" onPress={() => resetAll()}>
                    Сбросить все
                </Button>
            </HStack>
        </VStack>
    );
};
