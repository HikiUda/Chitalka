import { memo } from 'react';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/shared/ui/kit/select';
import { Heading } from '@/shared/ui/kit/heading';

export type SelectFieldItem<T extends string> = {
    value: T;
    label: string | number;
};

type SelectFieldProps<T extends string> = {
    className?: string;
    items: SelectFieldItem<T>[];
    label?: string | number;
    value: T | undefined;
    onValueChange: (value: T) => void;
};

const SelectField = <T extends string>(props: SelectFieldProps<T>) => {
    const { className, items, label, value, onValueChange } = props;
    return (
        <div className={className}>
            <Heading color="primary">{label}</Heading>
            <Select value={value} onValueChange={onValueChange}>
                <SelectTrigger className="w-[180px] cursor-pointer">
                    <SelectValue placeholder={label} />
                </SelectTrigger>
                <SelectContent>
                    {items.map((item) => (
                        <SelectItem className="cursor-pointer" key={item.value} value={item.value}>
                            {item.label}
                        </SelectItem>
                    ))}
                </SelectContent>
            </Select>
        </div>
    );
};
const SelectFieldMemo = memo(SelectField) as typeof SelectField;
export { SelectFieldMemo as SelectField };
