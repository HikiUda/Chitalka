import { SortBy } from '../../../model/slices/sortBy/sortBy';
import { SortByType } from '@/shared/api/deprecated/mangaList';
import { DropdownMenuRadioGroup, DropdownMenuRadioItem } from '@/shared/ui/kit/dropdown-menu';

interface SortByMenuGroupProps {
    className?: string;
    sortBy: SortByType;
    setSortBy: (sortBy: SortByType) => void;
}

export const SortByMenuGroup = (props: SortByMenuGroupProps) => {
    const { className, sortBy, setSortBy } = props;

    const handleSetSortBy = (val: string) => {
        setSortBy(val as SortByType);
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
