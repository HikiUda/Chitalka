import { useAgeRate } from '../../model/slices/ageRate/useAgeRate';
import { useStatus } from '../../model/slices/status/useStatus';
import { CheckboxGroup } from '../filters-build-blocks/CheckboxGroup';
import { Range } from '../filters-build-blocks/Range';
import { DateRange } from '../filters-build-blocks/DateRange';
import { useChapterCount } from '../../model/slices/chapterCount/useChapterCount';
import { useRate } from '../../model/slices/rate/useRate';
import { useRateCount } from '../../model/slices/rateCount/useRateCount';
import { useReleaseDate } from '../../model/slices/releaseDate/useReleaseDate';
import { useMangaType } from '../../model/slices/mangaType/useMangaType';
import { useBookmarks } from '../../model/slices/bookmarks/useBookmarks';
import { useMangaCatalogFiltersStore } from '../../model/manga/mangaCatalogFiltersStore';
import { ToOtherFilters } from '../layout/ToOtherFilters';
import { CatalogFilterCardLayout } from '../layout/CatalogFilterCardLayout';
import { CommonFooter } from '../layout/CommonFooter';
import { useApplyMangaFilters } from '../../model/manga/useApplyMangaFilters';

interface CommonFiltersProps {
    className?: string;
    toGenres: () => void;
    toTags: () => void;
}

export const CommonFilters = (props: CommonFiltersProps) => {
    const { className, toGenres, toTags } = props;

    const { applyFilters } = useApplyMangaFilters();

    const store = useMangaCatalogFiltersStore.use;

    const ageRate = useAgeRate(store);
    const chapterCount = useChapterCount(store);
    const rate = useRate(store);
    const rateCount = useRateCount(store);
    const releaseDate = useReleaseDate(store);
    const status = useStatus(store);
    const type = useMangaType(store);
    const bookmarks = useBookmarks(store);

    const resetAll = store.resetAll();

    return (
        <CatalogFilterCardLayout
            className={className}
            header={
                <div className="px-2 pt-2">
                    <ToOtherFilters onClick={toGenres} title="Жанры" />
                    <ToOtherFilters onClick={toTags} title="Теги" />
                </div>
            }
            body={
                <>
                    <Range {...ageRate} label="Возростной рейтинг" />
                    <Range {...chapterCount} label="Количество глав" />
                    <Range {...rate} max={10} label="Рейтинг" />
                    <Range {...rateCount} label="Количество оценнок" />
                    <DateRange {...releaseDate} label="Дата релиза" />
                    <CheckboxGroup {...status} label="Статус" />
                    <CheckboxGroup {...type} label="Тип" />
                    <CheckboxGroup {...bookmarks} label="В моих закладках" />
                </>
            }
            footer={
                <CommonFooter onApply={applyFilters} onReset={resetAll} className="mb-4 mx-4" />
            }
        />
    );
};
