import { SortBy } from '../../../model/slices/sortBy/sortBy';
import { createI18nModule } from '@/shared/kernel/i18n';
import { DropdownMenuRadioGroup, DropdownMenuRadioItem } from '@/shared/ui/kit/dropdown-menu';

type SortByMenuGroupProps = {
    className?: string;
    sortBy: SortBy;
    setSortBy: (sortBy: SortBy) => void;
    onApply: () => void;
};

export const { useI18n } = createI18nModule({
    rating: { ru: 'По рейтингу', en: 'By rating' },
    updateDate: { ru: 'По дате обновления', en: 'By update date' },
    createDate: { ru: 'По дате создания', en: 'By creation date' },
    alphabetically: { ru: 'По алфавиту (рус)', en: 'By alphabet (RU)' },
    enAlphabetically: { ru: 'По алфавиту (англ)', en: 'By alphabet (EN)' },
    views: { ru: 'По просмотрам', en: 'By views' },
    likes: { ru: 'По лайкам', en: 'By likes' },
    chapterCount: { ru: 'По количеству глав', en: 'By chapter count' },
});

export const SortByMenuGroup = (props: SortByMenuGroupProps) => {
    const { className, sortBy, setSortBy, onApply } = props;
    const t = useI18n();

    const handleSetSortBy = (val: string) => {
        setSortBy(val as SortBy);
        onApply();
    };

    return (
        <DropdownMenuRadioGroup
            value={sortBy}
            onValueChange={handleSetSortBy}
            className={className}
        >
            {Object.values(SortBy).map((sort) => (
                <DropdownMenuRadioItem className="cursor-pointer" key={sort} value={sort}>
                    {t(sort)}
                </DropdownMenuRadioItem>
            ))}
        </DropdownMenuRadioGroup>
    );
};
