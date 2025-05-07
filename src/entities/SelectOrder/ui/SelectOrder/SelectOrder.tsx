import { FC, useCallback, useState } from 'react';
import { OrderType } from '@/shared/types/order';
import { Button } from '@/shared/ui/Button';
import { Icon } from '@/shared/ui/Icon';
import SortSvg from '@/shared/assets/icon/common/sortArrow.svg';
import { classNames } from '@/shared/lib/helpers/classNames';
import { getFlex } from '@/shared/ui/Stack';
import cls from './SelectOrder.module.scss';

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
