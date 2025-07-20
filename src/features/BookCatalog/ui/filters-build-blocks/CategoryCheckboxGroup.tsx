import { memo } from 'react';
import { CategoryCheckbox, TriSwitchState } from './CategoryCheckbox';

export type CategoryCheckboxType<T extends string | number> = {
    label: string;
    value: T;
};

type CategoryCheckboxGroupProps<T extends string | number> = {
    className?: string;
    include: T[];
    exclude: T[];
    onChangeInclude: (include: T[]) => void;
    onChangeExclude: (exclude: T[]) => void;
    checkboxes: CategoryCheckboxType<T>[];
};

const CategoryCheckboxGroup = <T extends string | number>(props: CategoryCheckboxGroupProps<T>) => {
    const { className, include, exclude, onChangeInclude, onChangeExclude, checkboxes } = props;

    // ? May memo if include and exclude throw
    const onCheck = (value: T, nextState: TriSwitchState) => {
        switch (nextState) {
            case 'include':
                onChangeInclude(include.concat(value));
                return;
            case 'exclude':
                onChangeInclude(include.filter((v) => v !== value));
                onChangeExclude(exclude.concat(value));
                return;
            default:
                onChangeExclude(exclude.filter((v) => v !== value));
                return;
        }
    };

    const getState = (value: T): TriSwitchState => {
        if (include.includes(value)) return 'include';
        if (exclude.includes(value)) return 'exclude';
        return 'indeterminate';
    };

    return (
        <div className={className}>
            {checkboxes.map((checkbox) => (
                <CategoryCheckbox
                    key={checkbox.value}
                    label={checkbox.label}
                    value={checkbox.value}
                    state={getState(checkbox.value)}
                    onChangeState={onCheck}
                    className="px-2 py-1.5"
                />
            ))}
        </div>
    );
};

const CategoryCheckboxGroupMemo = memo(CategoryCheckboxGroup) as typeof CategoryCheckboxGroup;
export { CategoryCheckboxGroupMemo as CategoryCheckboxGroup };
