import { memo } from 'react';
import { classNames } from '@packages/model/src/lib/classNames';
import { Button } from '@ui/shared/Button';
import { SelectValue } from 'react-aria-components';
import { Icon } from '@ui/shared/Icon';
import SelectArrowIcon from '@ui/assets/icon/common/selectArrow.svg';
import { getFlex } from '@ui/shared/Stack';
import cls from './MiniOutline.module.scss';

interface MiniOutlineProps {
    className?: string;
}

export const MiniOutline = memo((props: MiniOutlineProps) => {
    const { className } = props;

    return (
        <Button theme="outline" className={classNames(cls.MiniOutline, {}, [getFlex()])}>
            <SelectValue />
            <Icon Svg={SelectArrowIcon} width={10} height={10} className={cls.icon} />
        </Button>
    );
});
