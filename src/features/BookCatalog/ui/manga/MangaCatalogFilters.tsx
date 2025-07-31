import { CatalogFiltersLayout } from '../layout/CatalogFiltersLayout';
import { useMangaCatalogFiltersStore } from '../../model/manga/useMangaCatalogFiltersStore';
import { useMangaCatalogApplyFilters } from '../../model/manga/useMangaCatalogApplyFilters';

import { useAgeRating } from '../../model/slices/ageRating/useAgeRating';
import { useBookLang } from '../../model/slices/bookLang/useBookLang';
import { useBookmarks } from '../../model/slices/bookmarks/useBookmarks';
import { useChapterCount } from '../../model/slices/chapterCount/useChapterCount';
import { useMangaType } from '../../model/slices/mangaType/useMangaType';
import { useRate } from '../../model/slices/rate/useRate';
import { useRateCount } from '../../model/slices/rateCount/useRateCount';
import { useReleaseDate } from '../../model/slices/releaseDate/useReleaseDate';
import { useStatus } from '../../model/slices/status/useStatus';
import { useGenres } from '../../model/slices/genres/useGenres';
import { useTags } from '../../model/slices/tags/useTags';

import { CatalogFilterCardLayout } from '../layout/CatalogFilterCardLayout';
import { CommonHeader } from '../layout/CommonHeader';
import { DateRange } from '../filters-build-blocks/DateRange';
import { CommonFooter } from '../layout/CommonFooter';
import { Range } from '../filters-build-blocks/Range';
import { CheckboxGroup } from '../filters-build-blocks/CheckboxGroup';
import { CategoryHeader } from '../layout/CategoryHeader';
import { CategoryCheckboxGroup } from '../filters-build-blocks/CategoryCheckboxGroup';
import { SelectField } from '../filters-build-blocks/SelectField';
import { useI18n } from '../../model/filters.i18n';
import { Button } from '@/shared/ui/kit/button';
import { Input } from '@/shared/ui/kit/input';

type MangaCatalogFiltersProps = {
    className?: string;
    onApply?: () => void;
};

export const MangaCatalogFilters = (props: MangaCatalogFiltersProps) => {
    const { className, onApply } = props;

    const t = useI18n();
    const store = useMangaCatalogFiltersStore.use;
    const { applyFilters } = useMangaCatalogApplyFilters(onApply);
    const resetAll = store.resetAll();

    const ageRating = useAgeRating(store);
    const bookLang = useBookLang(store);
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
                            <Range {...chapterCount} label={t('chaptersCount')} />
                            <Range {...rate} max={10} label={t('rate')} />
                            <Range {...rateCount} label={t('rateCount')} />
                            <DateRange {...releaseDate} label={t('releaseDate')} />
                            <CheckboxGroup {...ageRating} label={t('ageRating')} />
                            <SelectField {...bookLang} label={t('language')} />
                            <CheckboxGroup {...status} label={t('status')} />
                            <CheckboxGroup {...type} label={t('type')} />
                            <CheckboxGroup {...bookmarks} label={t('inBookmarks')} />
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
                            title={t('genres')}
                            input={
                                <Input
                                    {...searchGenres}
                                    variant="clear"
                                    placeholder={t('searchGenres')}
                                />
                            }
                        />
                    }
                    body={<CategoryCheckboxGroup {...genres} />}
                    footer={
                        <Button className="w-full" onClick={applyFilters}>
                            {t('apply')}
                        </Button>
                    }
                />
            )}
            tags={(onBack) => (
                <CatalogFilterCardLayout
                    className={className}
                    header={
                        <CategoryHeader
                            onBack={onBack}
                            onReset={resetTags}
                            title={t('tags')}
                            input={
                                <Input
                                    {...searchTags}
                                    variant="clear"
                                    placeholder={t('searchTags')}
                                />
                            }
                        />
                    }
                    body={<CategoryCheckboxGroup {...tags} />}
                    footer={
                        <Button className="w-full" onClick={applyFilters}>
                            {t('apply')}
                        </Button>
                    }
                />
            )}
        />
    );
};
