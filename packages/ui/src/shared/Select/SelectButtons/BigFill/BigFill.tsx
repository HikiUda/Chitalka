import { memo } from 'react';
import { classNames } from '@packages/model/src/lib/helpers/classNames';
import { Button } from '@ui/shared/Button';
import { SelectValue } from 'react-aria-components';
import SelectArrowIcon from '@ui/assets/icon/common/selectArrow.svg';
import { Icon } from '@ui/shared/Icon';
import { getFlex } from '@ui/shared/Stack';
import cls from './BigFill.module.scss';

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
