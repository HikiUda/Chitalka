import { MoveVerticalIcon } from 'lucide-react';
import { useCallback, useState } from 'react';
import { cn } from '@/shared/lib/css';
import { Button } from '@/shared/ui/kit/button';
import { createI18nModule } from '@/shared/kernel/i18n';

type OrderType = 'asc' | 'desc';

type ToggleOrderProps = {
    className?: string;
    value?: OrderType;
    onChange?: (value: OrderType) => void;
};

const { useI18n } = createI18nModule({
    asc: { ru: 'По возрастанию', en: 'Ascending' },
    desc: { ru: 'По убыванию', en: 'Descending' },
});

export const ToggleOrder = (props: ToggleOrderProps) => {
    const { onChange, value, className } = props;
    const [order, setOrder] = useState<OrderType>('desc');
    const t = useI18n();

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
            {t(value || order)}
        </Button>
    );
};
