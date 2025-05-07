import { memo, ReactNode } from 'react';
import {
    type CheckboxGroupProps as ACheckboxGroupProps,
    CheckboxGroup as ACheckboxGroup,
} from 'react-aria-components';
import { getFlex } from '../../Stack';
import { Heading } from '../../Heading';
import { classNames } from '@/shared/lib/helpers/classNames';

interface CheckboxGroupProps extends Omit<ACheckboxGroupProps, 'children'> {
    className?: string;
    children?: ReactNode;
    label?: string;
}

export const CheckboxGroup = memo((props: CheckboxGroupProps) => {
    const { className, label, children, ...otherProps } = props;

    return (
        <ACheckboxGroup
            {...otherProps}
            className={classNames(className, {}, [
                getFlex({ direction: 'column', align: 'start' }),
            ])}
        >
            {label && <Heading>{label}</Heading>}
            {children}
        </ACheckboxGroup>
    );
});
