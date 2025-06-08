import { useTags } from '../../model/hooks/filters/useTags';
import { CategoryFiltersLayout } from './CategoryFiltersLayout';
import { CategoryCheckboxGroup } from './CategoryCheckboxGroup';
import { Input } from '@/shared/ui/kit/input';

interface TagsFiltersProps {
    className?: string;
}

export const TagsFilters = (props: TagsFiltersProps) => {
    const { className } = props;

    const { checkboxes, tags, notTags, setTags, setNotTags, resetTags, search, setSearch } =
        useTags();

    return (
        <CategoryFiltersLayout
            className={className}
            title="Теги"
            input={
                <Input
                    value={search}
                    onChangeValue={setSearch}
                    variant="clear"
                    placeholder="Поиск Тегов"
                    className="px-2 py-3 "
                />
            }
            categories={
                <CategoryCheckboxGroup
                    checkboxes={checkboxes}
                    include={tags}
                    exclude={notTags}
                    onChangeInclude={setTags}
                    onChangeExclude={setNotTags}
                />
            }
            onReset={resetTags}
            onBack={() => 1}
        />
    );
};
