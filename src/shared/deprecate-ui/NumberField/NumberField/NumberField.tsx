import { FC } from 'react';
import {
    NumberField as ANumberField,
    Button,
    Input,
    NumberFieldProps as ANumberFieldProps,
} from 'react-aria-components';

import { getFlex } from '../../Stack';
import { Icon } from '../../Icon';
import cls from './NumberField.module.scss';
import SvgArrow from '@/shared/assets/icon/common/selectArrow.svg?react';
import { classNames } from '@/shared/lib/helpers/classNames';

type InputBorder = 'none' | 'primaryBorder' | 'secondaryBorder';

export interface NumberFieldProps extends ANumberFieldProps {
    className?: string;
    border?: InputBorder;
    placeholder?: string;
}

export const NumberField: FC<NumberFieldProps> = (props) => {
    const { className, placeholder, border = 'none', ...otherProps } = props;

    return (
        <ANumberField
            {...otherProps}
            className={classNames(cls.NumberField, {}, [className, getFlex(), cls[border]])}
        >
            <Input placeholder={placeholder} className={cls.input} />
            <div className={getFlex({ direction: 'column', gap: '4' })}>
                <Button className={cls.increment} slot="increment">
                    <Icon Svg={SvgArrow} size={10} />
                </Button>
                <Button className={cls.decrement} slot="decrement">
                    <Icon Svg={SvgArrow} size={10} />
                </Button>
            </div>
        </ANumberField>
    );
};
