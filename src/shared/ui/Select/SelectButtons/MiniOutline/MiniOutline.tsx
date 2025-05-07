import { memo } from 'react';
import { SelectValue } from 'react-aria-components';
import SelectArrowIcon from '@/shared/assets/icon/common/selectArrow.svg';
import { Icon } from '../../../Icon';
import { getFlex } from '../../../Stack';
import { Button } from '../../../Button';
import cls from './MiniOutline.module.scss';
import { classNames } from '@/shared/lib/helpers/classNames';

interface MiniOutlineProps {
    className?: string;
    'data-testid'?: string;
}

export const MiniOutline = memo((props: MiniOutlineProps) => {
    const { className, ...otherProps } = props;

    return (
        <Button
            {...otherProps}
            theme="outline"
            className={classNames(cls.MiniOutline, {}, [getFlex(), className])}
        >
            <SelectValue />
            <Icon Svg={SelectArrowIcon} width={10} height={10} className={cls.icon} />
        </Button>
    );
});
