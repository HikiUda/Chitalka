import { memo } from 'react';
import { classNames } from '@packages/model/src/lib/helpers/classNames';
import { Button } from '@ui/shared/Button';
import { SelectValue } from 'react-aria-components';
import { Icon } from '@ui/shared/Icon';
import SelectArrowIcon from '@ui/assets/icon/common/selectArrow.svg';
import { getFlex } from '@ui/shared/Stack';
import cls from './MiniOutline.module.scss';

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
