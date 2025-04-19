import { memo, ReactNode } from 'react';
import { classNames } from '@packages/model/src/lib/helpers/classNames';
import { CheckboxProps as ACheckboxProps, Checkbox as ACheckbox } from 'react-aria-components';
import { getFlex } from '@ui/shared/Stack';
import cls from './Checkbox.module.scss';

interface CheckboxProps extends ACheckboxProps {
    className?: string;
    children?: ReactNode;
}

export const Checkbox = memo((props: CheckboxProps) => {
    const { className, children, ...otherProps } = props;

    return (
        <ACheckbox {...otherProps} className={classNames(cls.Checkbox, {}, [className, getFlex()])}>
            {({ isIndeterminate }) => (
                <>
                    <div className={classNames(cls.checkbox, {}, [getFlex({ flexShrink: false })])}>
                        <svg viewBox="0 0 18 18" aria-hidden="true">
                            {isIndeterminate ? (
                                <rect x={1} y={7.5} width={15} height={3} />
                            ) : (
                                <polyline points="1 9 7 14 15 4" />
                            )}
                        </svg>
                    </div>
                    {children}
                </>
            )}
        </ACheckbox>
    );
});
