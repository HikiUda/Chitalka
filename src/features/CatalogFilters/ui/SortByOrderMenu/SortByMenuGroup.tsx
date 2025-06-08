import { SortBy, SortByType } from '../../model/helpers/sortBy';
import { useCatalogFiltersStore } from '../../model/store/catalogFiltersStore';
import { DropdownMenuRadioGroup, DropdownMenuRadioItem } from '@/shared/ui/kit/dropdown-menu';
import { useUrlSearchParams } from '@/shared/lib/hooks/useUrlSearchParams';

interface SortByMenuGroupProps {
    className?: string;
}

export const SortByMenuGroup = (props: SortByMenuGroupProps) => {
    const { className } = props;

    const { setSearchParam } = useUrlSearchParams();

    const sortBy = useCatalogFiltersStore.use.sortBy();
    const setSortBy = useCatalogFiltersStore.use.setSortBy();
    const handleSetSortBy = (sort: string) => {
        setSortBy(sort as SortByType);
        setSearchParam('sortBy', sort);
    };

    return (
        <DropdownMenuRadioGroup
            value={sortBy}
            onValueChange={handleSetSortBy}
            className={className}
        >
            {Object.values(SortBy).map((sort) => (
                <DropdownMenuRadioItem key={sort} value={sort}>
                    {sort}
                </DropdownMenuRadioItem>
            ))}
        </DropdownMenuRadioGroup>
    );
};
