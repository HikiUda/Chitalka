import { FC } from 'react';
import { classNames } from '@packages/model/src/lib/helpers/classNames';
import {
    NumberField as ANumberField,
    Button,
    Input,
    NumberFieldProps as ANumberFieldProps,
} from 'react-aria-components';
import SvgArrow from '@ui/assets/icon/common/selectArrow.svg';

import { getFlex } from '../Stack';
import { Icon } from '../Icon';
import cls from './NumberField.module.scss';

type InputBorder = 'none' | 'primaryBorder' | 'secondaryBorder';

interface NumberFieldProps extends ANumberFieldProps {
    className?: string;
    border?: InputBorder;
    placeholder?: string;
}

export const NumberField: FC<NumberFieldProps> = (props) => {
    const { className, placeholder, border = 'none', ...otherProps } = props;

    return (
        <ANumberField
            {...otherProps}
            className={classNames(cls.NumberField, {}, [className, getFlex({}), cls[border]])}
        >
            <Input placeholder={placeholder} className={cls.input} />
            <div className={cls.buttons}>
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
