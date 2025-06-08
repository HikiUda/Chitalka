import { useGenres } from '../../model/hooks/filters/useGenres';
import { CategoryFiltersLayout } from './CategoryFiltersLayout';
import { CategoryCheckboxGroup } from './CategoryCheckboxGroup';
import { Input } from '@/shared/ui/kit/input';

interface GenresFiltersProps {
    className?: string;
}

export const GenresFilters = (props: GenresFiltersProps) => {
    const { className } = props;

    const {
        checkboxes,
        genres,
        notGenres,
        setGenres,
        setNotGenres,
        resetGenres,
        search,
        setSearch,
    } = useGenres();

    return (
        <CategoryFiltersLayout
            className={className}
            title="Жанры"
            input={
                <Input
                    value={search}
                    onChangeValue={setSearch}
                    variant="clear"
                    placeholder="Поиск Жанров"
                    className="px-2 py-3 "
                />
            }
            categories={
                <CategoryCheckboxGroup
                    checkboxes={checkboxes}
                    include={genres}
                    exclude={notGenres}
                    onChangeInclude={setGenres}
                    onChangeExclude={setNotGenres}
                />
            }
            onReset={resetGenres}
            onBack={() => 1}
        />
    );
};
