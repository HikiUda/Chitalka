import { CategoryCheckboxGroup } from '../filters-build-blocks/CategoryCheckboxGroup';
import { useMangaCatalogFiltersStore } from '../../model/manga/mangaCatalogFiltersStore';
import { useTags } from '../../model/slices/tags/useTags';
import { CategoryHeader } from '../layout/CategoryHeader';
import { CatalogFilterCardLayout } from '../layout/CatalogFilterCardLayout';
import { useApplyMangaFilters } from '../../model/manga/useApplyMangaFilters';
import { Input } from '@/shared/ui/kit/input';
import { Button } from '@/shared/ui/kit/button';
import { Separator } from '@/shared/ui/kit/separator';

interface TagsFiltersProps {
    className?: string;
    onBack: () => void;
}

export const TagsFilters = (props: TagsFiltersProps) => {
    const { className, onBack } = props;

    const { applyFilters } = useApplyMangaFilters();
    const store = useMangaCatalogFiltersStore.use;

    const { checkboxes, tags, notTags, setTags, setNotTags, resetTags, search, setSearch } =
        useTags(store);

    return (
        <CatalogFilterCardLayout
            className={className}
            header={
                <div className="px-4 pt-4">
                    <CategoryHeader onBack={onBack} onReset={resetTags} title="Теги" />
                    <Separator />
                    <Input
                        value={search}
                        onChangeValue={setSearch}
                        variant="clear"
                        placeholder="Поиск Тегов"
                        className="px-2 py-3 "
                    />
                    <Separator className="mb-2" />
                </div>
            }
            body={
                <CategoryCheckboxGroup
                    checkboxes={checkboxes}
                    include={tags}
                    exclude={notTags}
                    onChangeInclude={setTags}
                    onChangeExclude={setNotTags}
                />
            }
            footer={
                <Button onClick={applyFilters} className="mx-4 mb-4">
                    Применить
                </Button>
            }
        />
    );
};
