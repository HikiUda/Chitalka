import { Label } from '@radix-ui/react-label';
import { memo, useCallback } from 'react';
import { Checkbox } from '@/shared/ui/kit/checkbox';
import { Heading } from '@/shared/ui/kit/heading';

export type CheckboxType<T> = {
    label: string;
    value: T;
};

type CheckboxGroupProps<T extends string | number> = {
    className?: string;
    label: string;
    values: T[];
    onValuesChange: (values: T[]) => void;
    checkboxes: CheckboxType<T>[];
};

const CheckboxGroup = <T extends string | number>(props: CheckboxGroupProps<T>) => {
    const { className, values, onValuesChange, label, checkboxes } = props;

    const onCheck = useCallback(
        (check: boolean | string, value: T) => {
            if (check) {
                onValuesChange(values.concat(value));
            } else {
                onValuesChange(values.filter((val) => val !== value));
            }
        },
        [onValuesChange, values],
    );

    return (
        <div className={className}>
            <Heading color="primary">{label}</Heading>
            <div className="flex flex-wrap gap-3 items-center">
                {checkboxes.map((checkbox) => (
                    <div className="flex gap-1 items-center" key={checkbox.value}>
                        <Checkbox
                            checked={values.includes(checkbox.value)}
                            onCheckedChange={(check) => onCheck(check, checkbox.value)}
                        />
                        <Label>{checkbox.label}</Label>
                    </div>
                ))}
            </div>
        </div>
    );
};
const CheckboxGroupMemo = memo(CheckboxGroup) as typeof CheckboxGroup;
export { CheckboxGroupMemo as CheckboxGroup };
