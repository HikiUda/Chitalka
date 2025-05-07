import { FC } from 'react';
import { FromToNumberField } from '@/shared/ui/NumberField';
import { useUrlSearchParams } from '@/shared/lib/hooks/useUrlSearchParams';
import { useCatalogFiltersStore } from '../../../model/store/catalogFiltersStore';
import { RangeWrapper } from '../RangeWrapper/RangeWrapper';
import { fromNoBiggerTo } from '../../../model/helpers/fromNoBiggerTo';
import { toNoLessFrom } from '../../../model/helpers/toNoLessFrom';

interface ChapterCountRangeProps {
    className?: string;
}

export const ChapterCountRange: FC<ChapterCountRangeProps> = (props) => {
    const { className } = props;
    const { setSearchParam } = useUrlSearchParams();
    const chapterCountFrom = useCatalogFiltersStore.use.chapterCountFrom();
    const setChapterCountFrom = useCatalogFiltersStore.use.setChapterCountFrom();
    const chapterCountTo = useCatalogFiltersStore.use.chapterCountTo();
    const setChapterCountTo = useCatalogFiltersStore.use.setChapterCountTo();

    const handleSetChapterCountFrom = (chapterCount: number) => {
        setChapterCountFrom(chapterCount);
        setSearchParam('chapterCountFrom', String(fromNoBiggerTo(chapterCount, chapterCountTo)));
    };
    const handleSetChapterCountTo = (chapterCount: number) => {
        setChapterCountTo(chapterCount);
        setSearchParam('chapterCountTo', String(toNoLessFrom(chapterCountFrom, chapterCount)));
    };

    return (
        <RangeWrapper className={className} title="Количество глав">
            <FromToNumberField
                fromValue={chapterCountFrom}
                toValue={chapterCountTo}
                setFromValue={handleSetChapterCountFrom}
                setToValue={handleSetChapterCountTo}
                minValue={0}
                aria-label="chapterCount"
            />
        </RangeWrapper>
    );
};
