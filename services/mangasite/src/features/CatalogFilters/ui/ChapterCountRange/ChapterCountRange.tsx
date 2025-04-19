import { FC } from 'react';
import { useCatalogFiltersStore } from '../../model/store/catalogFiltersStore';
import { RangeWrapper } from '../RangeWrapper/RangeWrapper';
import { FromToNumberField } from '@/entities/FromToNumberField';

interface ChapterCountRangeProps {
    className?: string;
}

export const ChapterCountRange: FC<ChapterCountRangeProps> = (props) => {
    const { className } = props;
    const chapterCountFrom = useCatalogFiltersStore.use.chapterCountFrom();
    const setChapterCountFrom = useCatalogFiltersStore.use.setChapterCountFrom();
    const chapterCountTo = useCatalogFiltersStore.use.chapterCountTo();
    const setChapterCountTo = useCatalogFiltersStore.use.setChapterCountTo();

    return (
        <RangeWrapper className={className} title="Количество глав">
            <FromToNumberField
                fromValue={chapterCountFrom}
                toValue={chapterCountTo}
                setFromValue={setChapterCountFrom}
                setToValue={setChapterCountTo}
                minValue={0}
                aria-label="chapterCount"
            />
        </RangeWrapper>
    );
};
