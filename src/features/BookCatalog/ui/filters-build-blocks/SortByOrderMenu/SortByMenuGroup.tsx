import { SortBy, SortByType } from '../../../model/slices/sortBy/sortBy';
import { DropdownMenuRadioGroup, DropdownMenuRadioItem } from '@/shared/ui/kit/dropdown-menu';

type SortByMenuGroupProps = {
    className?: string;
    sortBy: SortByType;
    setSortBy: (sortBy: SortByType) => void;
    onApply: () => void;
};

export const SortByMenuGroup = (props: SortByMenuGroupProps) => {
    const { className, sortBy, setSortBy, onApply } = props;

    const handleSetSortBy = (val: string) => {
        setSortBy(val as SortByType);
        onApply();
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
