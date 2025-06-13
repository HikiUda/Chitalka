import { CategoryCheckboxGroup } from '../filters-build-blocks/CategoryCheckboxGroup';
import { useMangaCatalogFiltersStore } from '../../model/manga/mangaCatalogFiltersStore';
import { useGenres } from '../../model/slices/genres/useGenres';
import { CategoryHeader } from '../layout/CategoryHeader';
import { CatalogFilterCardLayout } from '../layout/CatalogFilterCardLayout';
import { Input } from '@/shared/ui/kit/input';
import { Button } from '@/shared/ui/kit/button';
import { Separator } from '@/shared/ui/kit/separator';

interface GenresFiltersProps {
    className?: string;
    onBack: () => void;
}

export const GenresFilters = (props: GenresFiltersProps) => {
    const { className, onBack } = props;

    const store = useMangaCatalogFiltersStore.use;

    const {
        checkboxes,
        genres,
        notGenres,
        setGenres,
        setNotGenres,
        resetGenres,
        search,
        setSearch,
    } = useGenres(store);

    return (
        <CatalogFilterCardLayout
            className={className}
            header={
                <div className="px-4 pt-4">
                    <CategoryHeader onBack={onBack} onReset={resetGenres} title="Жанры" />
                    <Separator />
                    <Input
                        value={search}
                        onChangeValue={setSearch}
                        variant="clear"
                        placeholder="Поиск Жанров"
                        className="px-2 py-3 "
                    />
                    <Separator className="mb-2" />
                </div>
            }
            body={
                <CategoryCheckboxGroup
                    checkboxes={checkboxes}
                    include={genres}
                    exclude={notGenres}
                    onChangeInclude={setGenres}
                    onChangeExclude={setNotGenres}
                />
            }
            footer={<Button className="mx-4 mb-4">Применить</Button>}
        />
    );
};
