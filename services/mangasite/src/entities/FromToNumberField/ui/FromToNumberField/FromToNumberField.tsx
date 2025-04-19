import { memo } from 'react';
import { HStack } from '@packages/ui/src/shared/Stack';
import { NumberField, NumberFieldProps } from '@packages/ui/src/shared/NumberField';
import cls from './FromToNumberField.module.scss';

interface FromToNumberFieldProps extends Omit<NumberFieldProps, 'placeholder'> {
    className?: string;
    fromValue?: number;
    toValue?: number;
    setFromValue: (value: number) => void;
    setToValue?: (value: number) => void;
    fromProps?: Omit<NumberFieldProps, 'value' | 'onChange'>;
    toProps?: Omit<NumberFieldProps, 'value' | 'onChange'>;
}

export const FromToNumberField = memo((props: FromToNumberFieldProps) => {
    const {
        className,
        fromValue,
        toValue,
        setFromValue,
        setToValue,
        fromProps = {},
        toProps = {},
        ...otherProps
    } = props;

    return (
        <HStack gap="4" className={className}>
            <NumberField
                placeholder="От"
                border="primaryBorder"
                {...otherProps}
                {...fromProps}
                value={fromValue}
                onChange={setFromValue}
            />
            <span className={cls.divider} />
            <NumberField
                placeholder="До"
                border="primaryBorder"
                {...otherProps}
                {...toProps}
                value={toValue}
                onChange={setToValue}
            />
        </HStack>
    );
});
