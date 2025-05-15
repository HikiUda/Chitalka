import { ChangeEvent, memo } from 'react';
import { classNames } from '@/shared/lib/helpers/classNames';
import { TextArea, TextAreaProps } from 'react-aria-components';
import cls from './TextArea.module.scss';
// ? usless component
interface MyTextAreaProps extends Omit<TextAreaProps, 'onChange'> {
    className?: string;
    text?: string;
    onChange?: (text: string) => void;
}

export const MyTextArea = memo((props: MyTextAreaProps) => {
    const { className, value, onChange, ...otherProps } = props;
    const handleOnChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        onChange?.(e.target.value);
    };

    return (
        <TextArea
            {...otherProps}
            value={value}
            onChange={handleOnChange}
            className={classNames(cls.TextArea, {}, [className])}
        />
    );
});
