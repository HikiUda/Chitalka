import { memo } from 'react';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/shared/ui/kit/select';
import { cn } from '@/shared/lib/css';

export type SelectFieldItem<T extends string> = {
    value: T;
    label: string | number;
};

type SelectFieldProps<T extends string> = {
    className?: string;
    items: SelectFieldItem<T>[];
    placeholder?: string | number;
    value: T | undefined;
    onValueChange: (value: T) => void;
};

const SelectField = <T extends string>(props: SelectFieldProps<T>) => {
    const { className, items, placeholder, value, onValueChange } = props;
    return (
        <Select value={value} onValueChange={onValueChange}>
            <SelectTrigger className={cn('w-[180px]', className)}>
                <SelectValue placeholder={placeholder} />
            </SelectTrigger>
            <SelectContent>
                {items.map((item) => (
                    <SelectItem key={item.value} value={item.value}>
                        {item.label}
                    </SelectItem>
                ))}
            </SelectContent>
        </Select>
    );
};
const SelectFieldMemo = memo(SelectField) as typeof SelectField;
export { SelectFieldMemo as SelectField };
