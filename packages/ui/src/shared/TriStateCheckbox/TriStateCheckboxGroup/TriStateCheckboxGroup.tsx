import { FC, ReactNode, useCallback, useState } from 'react';
import { classNames } from '@packages/model/src/lib/helpers/classNames';
import { Heading } from '@ui/shared/Heading';
import {
    IncludeExcludeType,
    TriStateCheckboxGroupContext,
    TriSwitchState,
} from '../TriStateCheckboxGroupContext/TriStateCheckboxGroupContext';
import cls from './TriStateCheckboxGroup.module.scss';

interface TriStateCheckboxGroupProps {
    className?: string;
    include?: IncludeExcludeType;
    exclude?: IncludeExcludeType;
    onChangeInclude?: (include: IncludeExcludeType) => void;
    onChangeExclude?: (exclude: IncludeExcludeType) => void;
    children?: ReactNode;
    label?: string;
}

export const TriStateCheckboxGroup: FC<TriStateCheckboxGroupProps> = (props) => {
    const { className, include, exclude, onChangeExclude, onChangeInclude, children, label } =
        props;
    const controlled = !!include && !!exclude && !!onChangeExclude && !!onChangeInclude;

    const [internalInclude, setInclude] = useState<IncludeExcludeType>([]);
    const [internalExclude, setExclude] = useState<IncludeExcludeType>([]);

    const onCheck = useCallback(
        (value: string | number, nextState: TriSwitchState) => {
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
            <div className={classNames(cls.TriStateCheckboxGroup, {}, [className])}>
                {label && <Heading>{label}</Heading>}
                {children}
            </div>
        </TriStateCheckboxGroupContext>
    );
};
