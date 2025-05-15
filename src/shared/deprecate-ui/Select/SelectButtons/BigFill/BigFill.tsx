import { memo } from 'react';
import { SelectValue } from 'react-aria-components';
import { Icon } from '../../../Icon';
import { getFlex } from '../../../Stack';
import { Button } from '../../../Button';
import cls from './BigFill.module.scss';
import SelectArrowIcon from '@/shared/assets/icon/common/selectArrow.svg?react';
import { classNames } from '@/shared/lib/helpers/classNames';

interface BigFillProps {
    className?: string;
    'data-testid'?: string;
}

export const BigFill = memo((props: BigFillProps) => {
    const { className, ...otherProps } = props;

    return (
        <Button
            {...otherProps}
            max
            theme="fill"
            color="secondary"
            className={classNames(cls.BigFill, {}, [getFlex({ justify: 'between' }), className])}
        >
            <SelectValue />
            <Icon Svg={SelectArrowIcon} width={10} height={10} className={cls.icon} />
        </Button>
    );
});
