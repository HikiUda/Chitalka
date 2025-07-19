import { CatalogFiltersLayout } from '../layout/CatalogFiltersLayout';
import { useMangaCatalogFiltersStore } from '../../model/manga/mangaCatalogFiltersStore';
import { useApplyMangaCatalogFilters } from '../../model/manga/useApplyMangaCatalogFilters';
import { useAgeRating } from '../../model/slices/ageRating/useAgeRating';
import { useBookmarks } from '../../model/slices/bookmarks/useBookmarks';
import { useChapterCount } from '../../model/slices/chapterCount/useChapterCount';
import { useMangaType } from '../../model/slices/mangaType/useMangaType';
import { useRate } from '../../model/slices/rate/useRate';
import { useRateCount } from '../../model/slices/rateCount/useRateCount';
import { useReleaseDate } from '../../model/slices/releaseDate/useReleaseDate';
import { useStatus } from '../../model/slices/status/useStatus';
import { CatalogFilterCardLayout } from '../layout/CatalogFilterCardLayout';
import { CommonHeader } from '../layout/CommonHeader';
import { DateRange } from '../filters-build-blocks/DateRange';
import { CommonFooter } from '../layout/CommonFooter';
import { Range } from '../filters-build-blocks/Range';
import { CheckboxGroup } from '../filters-build-blocks/CheckboxGroup';
import { CategoryHeader } from '../layout/CategoryHeader';
import { CategoryCheckboxGroup } from '../filters-build-blocks/CategoryCheckboxGroup';
import { useGenres } from '../../model/slices/genres/useGenres';
import { useTags } from '../../model/slices/tags/useTags';
import { Button } from '@/shared/ui/kit/button';
import { Input } from '@/shared/ui/kit/input';

type MangaCatalogFiltersProps = {
    className?: string;
};

export const MangaCatalogFilters = (props: MangaCatalogFiltersProps) => {
    const { className } = props;

    const { applyFilters } = useApplyMangaCatalogFilters();

    const store = useMangaCatalogFiltersStore.use;
    const resetAll = store.resetAll();

    const ageRate = useAgeRating(store);
    const chapterCount = useChapterCount(store);
    const rate = useRate(store);
    const rateCount = useRateCount(store);
    const releaseDate = useReleaseDate(store);
    const status = useStatus(store);
    const type = useMangaType(store);
    const bookmarks = useBookmarks(store);
    const { genres, resetGenres, searchGenres } = useGenres(store);
    const { tags, resetTags, searchTags } = useTags(store);

    return (
        <CatalogFiltersLayout
            className={className}
            common={(toGenres, toTags) => (
                <CatalogFilterCardLayout
                    header={<CommonHeader toGenres={toGenres} toTags={toTags} />}
                    body={
                        <>
                            <Range {...chapterCount} label="Количество глав" />
                            <Range {...rate} max={10} label="Рейтинг" />
                            <Range {...rateCount} label="Количество оценнок" />
                            <DateRange {...releaseDate} label="Дата релиза" />
                            <CheckboxGroup {...ageRate} label="Возростной рейтинг" />
                            <CheckboxGroup {...status} label="Статус" />
                            <CheckboxGroup {...type} label="Тип" />
                            <CheckboxGroup {...bookmarks} label="В моих закладках" />
                        </>
                    }
                    footer={<CommonFooter onApply={applyFilters} onReset={resetAll} />}
                />
            )}
            genres={(onBack) => (
                <CatalogFilterCardLayout
                    header={
                        <CategoryHeader
                            onBack={onBack}
                            onReset={resetGenres}
                            title="Жанры"
                            input={
                                <Input
                                    {...searchGenres}
                                    variant="clear"
                                    placeholder="Поиск Жанров"
                                />
                            }
                        />
                    }
                    body={<CategoryCheckboxGroup {...genres} />}
                    footer={<Button onClick={applyFilters}>Применить</Button>}
                />
            )}
            tags={(onBack) => (
                <CatalogFilterCardLayout
                    className={className}
                    header={
                        <CategoryHeader
                            onBack={onBack}
                            onReset={resetTags}
                            title="Теги"
                            input={
                                <Input {...searchTags} variant="clear" placeholder="Поиск Тегов" />
                            }
                        />
                    }
                    body={<CategoryCheckboxGroup {...tags} />}
                    footer={<Button onClick={applyFilters}>Применить</Button>}
                />
            )}
        />
    );
};
