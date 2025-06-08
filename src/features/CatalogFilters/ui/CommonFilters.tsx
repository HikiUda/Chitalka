import { useAgeRate } from '../model/hooks/filters/useAgeRate';
import { useBookmarks } from '../model/hooks/filters/useBookmarks';
import { useChapterCount } from '../model/hooks/filters/useChapterCount';
import { useMangaType } from '../model/hooks/filters/useMangaType';
import { useRate } from '../model/hooks/filters/useRate';
import { useRateCount } from '../model/hooks/filters/useRateCount';
import { useReleaseDate } from '../model/hooks/filters/useReleaseDate';
import { useStatus } from '../model/hooks/filters/useStatus';
import { CheckboxGroup } from './CheckboxGroup';
import { Range } from './Range';
import { ReleaseDateRange } from './ReleaseDateRange';
import { cn } from '@/shared/lib/css';

interface CommonFiltersProps {
    className?: string;
}

export const CommonFilters = (props: CommonFiltersProps) => {
    const { className } = props;

    const ageRate = useAgeRate();
    const chapterCount = useChapterCount();
    const rate = useRate();
    const rateCount = useRateCount();
    const releaseDate = useReleaseDate();
    const status = useStatus();
    const type = useMangaType();
    const bookmarks = useBookmarks();

    return (
        <div className={cn('bg-background p-2 flex flex-col gap-4', className)}>
            <Range {...ageRate} label="Возростной рейтинг" />
            <Range {...chapterCount} label="Количество глав" />
            <Range {...rate} label="Рейтинг" />
            <Range {...rateCount} label="Количество оценнок" />
            <ReleaseDateRange {...releaseDate} label="Дата релиза" />
            <CheckboxGroup {...status} label="Статус" />
            <CheckboxGroup {...type} label="Тип" />
            <CheckboxGroup {...bookmarks} label="В моих закладках" />
        </div>
    );
};
