import { MoveVerticalIcon } from 'lucide-react';
import { FC, useCallback, useState } from 'react';
import { cn } from '@/shared/lib/css';
import { Button } from '@/shared/ui/kit/button';

type OrderType = 'asc' | 'desc';

interface ToggleOrderProps {
    className?: string;
    value?: OrderType;
    onChange?: (value: OrderType) => void;
}

export const ToggleOrder: FC<ToggleOrderProps> = (props) => {
    const { onChange, value, className } = props;
    const [order, setOrder] = useState<OrderType>('desc');

    const onHandleChange = useCallback(() => {
        const next = (value || order) === 'asc' ? 'desc' : 'asc';
        if (value && onChange) {
            onChange(next);
        } else {
            setOrder(next);
        }
    }, [onChange, order, value]);

    return (
        <Button
            className={cn('flex justify-center items-center gap-2', className)}
            variant="outline"
            size="sm"
            onClick={onHandleChange}
        >
            <MoveVerticalIcon />
            {value || order}
        </Button>
    );
};
