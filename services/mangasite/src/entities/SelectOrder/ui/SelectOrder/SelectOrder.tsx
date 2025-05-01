import { FC, useCallback, useState } from 'react';
import { OrderType } from '@packages/model/src/types/order';
import { Button } from '@packages/ui/src/shared/Button';
import { Icon } from '@packages/ui/src/shared/Icon';
import SortSvg from '@packages/ui/src/assets/icon/common/sortArrow.svg';
import { classNames } from '@packages/model/src/lib/helpers/classNames';
import { getFlex } from '@packages/ui/src/shared/Stack';
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
