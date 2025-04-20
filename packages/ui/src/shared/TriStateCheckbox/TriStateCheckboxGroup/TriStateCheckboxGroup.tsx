import { ReactNode, useCallback, useState } from 'react';
import {
    TriStateCheckboxGroupContext,
    TriSwitchState,
} from '../TriStateCheckboxGroupContext/TriStateCheckboxGroupContext';

interface TriStateCheckboxGroupProps<T extends string | number> {
    className?: string;
    include?: T[];
    exclude?: T[];
    onChangeInclude?: (include: T[]) => void;
    onChangeExclude?: (exclude: T[]) => void;
    children?: ReactNode;
    label?: string;
}

export const TriStateCheckboxGroup = <T extends string | number>(
    props: TriStateCheckboxGroupProps<T>,
) => {
    const { className, include, exclude, onChangeExclude, onChangeInclude, children, label } =
        props;
    const controlled = !!include && !!exclude && !!onChangeExclude && !!onChangeInclude;

    const [internalInclude, setInclude] = useState<T[]>([]);
    const [internalExclude, setExclude] = useState<T[]>([]);

    const onCheck = useCallback(
        (value: T, nextState: TriSwitchState) => {
            switch (nextState) {
                case 'include':
                    if (controlled) {
                        onChangeInclude(include.concat(value));
                    } else {
                        setInclude((prev) => prev.concat(value));
                    }
                    return;
                case 'exclude':
                    if (controlled) {
                        onChangeInclude(include.filter((v) => v !== value));
                        onChangeExclude(exclude.concat(value));
                    } else {
                        setInclude((prev) => prev.filter((v) => v !== value));
                        setExclude((prev) => prev.concat(value));
                    }

                    return;
                default:
                    if (controlled) {
                        onChangeExclude(exclude.filter((v) => v !== value));
                    } else {
                        setExclude((prev) => prev.filter((v) => v !== value));
                    }
                    return;
            }
        },
        [controlled, exclude, include, onChangeExclude, onChangeInclude],
    );

    return (
        <TriStateCheckboxGroupContext
            value={{
                include: include || internalInclude,
                exclude: exclude || internalExclude,
                onCheck,
            }}
        >
            {children}
        </TriStateCheckboxGroupContext>
    );
};
