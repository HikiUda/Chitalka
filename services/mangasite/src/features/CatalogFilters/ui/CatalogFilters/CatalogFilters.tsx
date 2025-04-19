import { FC } from 'react';
import { classNames } from '@packages/model/src/lib/helpers/classNames';
import { VStack } from '@packages/ui/src/shared/Stack';
import { RateCountRange } from '../RateCountRange/RateCountRange';
import { RateRange } from '../RateRange/RateRange';
import { ChapterCountRange } from '../ChapterCountRange/ChapterCountRange';
import { AgeRateRange } from '../AgeRateRange/AgeRateRange';
import { MangaTypeCheckbox } from '../MangaTypeCheckbox/MangaTypeCheckbox';
import { MangaStatusCheckbox } from '../MangaStatusCheckbox/MangaStatusCheckbox';
import { BookmarksCheckbox } from '../BookmarksCheckbox/BookmarksCheckbox';
import { ReleaseDateRange } from '../ReleaseDateRange/ReleaseDateRange';
import cls from './CatalogFilters.module.scss';
import { GenresCheckbox } from '../GenresCheckbox/GenresCheckbox';
import { TagsCheckbox } from '../TagsCheckbox/TagsCheckbox';

interface CatalogFiltersProps {
    className?: string;
}

const CatalogFilters: FC<CatalogFiltersProps> = (props) => {
    const { className } = props;

    return (
        <VStack gap="16" className={classNames(cls.CatalogFilters, {}, [className])}>
            <RateCountRange />
            <RateRange />
            <ChapterCountRange />
            <AgeRateRange />
            <ReleaseDateRange />
            <MangaTypeCheckbox />
            <MangaStatusCheckbox />
            <BookmarksCheckbox />
            <GenresCheckbox />
            <TagsCheckbox />
        </VStack>
    );
};
export default CatalogFilters;
