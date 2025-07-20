import { SortBy } from '../../../model/slices/sortBy/sortBy';
import { DropdownMenuRadioGroup, DropdownMenuRadioItem } from '@/shared/ui/kit/dropdown-menu';

type SortByMenuGroupProps = {
    className?: string;
    sortBy: SortBy;
    setSortBy: (sortBy: SortBy) => void;
    onApply: () => void;
};

export const SortByMenuGroup = (props: SortByMenuGroupProps) => {
    const { className, sortBy, setSortBy, onApply } = props;

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
                    {sort}
                </DropdownMenuRadioItem>
            ))}
        </DropdownMenuRadioGroup>
    );
};
