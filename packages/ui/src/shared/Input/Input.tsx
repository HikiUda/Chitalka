import { ChangeEvent, FC } from 'react';
import { classNames } from '@packages/model/src/lib/classNames/classNames';
import type { InputProps as AInputProps } from 'react-aria-components';
import { Input as AInput } from 'react-aria-components';
import cls from './Input.module.scss';

type InputBorder = 'none' | 'primaryBorder' | 'secondaryBorder';

interface InputProps extends Omit<AInputProps, 'onChange' | 'value'> {
    className?: string;
    value?: string | number;
    onChange?: (value: string) => void;
    border?: InputBorder;
    maxWidth?: boolean;
}

export const Input: FC<InputProps> = (props) => {
    const { className, value, onChange, border = 'none', maxWidth, ...otherProps } = props;

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value);
    };

    return (
        <AInput
            value={value}
            onChange={onChangeHandler}
            className={classNames(cls.Input, { [cls.maxWidth]: maxWidth }, [
                className,
                cls[border],
            ])}
            {...otherProps}
        ></AInput>
    );
};
