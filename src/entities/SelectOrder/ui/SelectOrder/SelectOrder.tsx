import { FC, useCallback, useState } from 'react';
import cls from './SelectOrder.module.scss';
import { OrderType } from '@/shared/kernel/order';
import { Button } from '@/shared/deprecate-ui/Button';
import { Icon } from '@/shared/deprecate-ui/Icon';
import SortSvg from '@/shared/assets/icon/common/sortArrow.svg?react';
import { classNames } from '@/shared/lib/helpers/classNames';
import { getFlex } from '@/shared/deprecate-ui/Stack';

interface SelectOrderProps {
    className?: string;
    value?: OrderType;
    onChange?: (value: OrderType) => void;
}

export const SelectOrder: FC<SelectOrderProps> = (props) => {
    const { onChange, value } = props;
    const [order, setOrder] = useState<OrderType>('desc');

    const onHandleChange = useCallback(() => {
        const next = (value || order) === 'asc' ? 'desc' : 'asc';
        if (onChange) {
            onChange(next);
        } else {
            setOrder(next);
        }
    }, [onChange, order, value]);

    return (
        <Button
            className={classNames(cls.SelectOrder, {}, [getFlex()])}
            theme="outline"
            onPress={onHandleChange}
        >
            <Icon Svg={SortSvg} size={15} />
            {value || order}
        </Button>
    );
};
