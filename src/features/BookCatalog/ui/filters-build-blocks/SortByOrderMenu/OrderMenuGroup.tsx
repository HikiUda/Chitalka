import { Order } from '../../../model/slices/order/orderSlice';
import { createI18nModule } from '@/shared/kernel/i18n';
import { DropdownMenuRadioGroup, DropdownMenuRadioItem } from '@/shared/ui/kit/dropdown-menu';

type SortByMenuGroupProps = {
    className?: string;
    order: Order;
    setOrder: (order: Order) => void;
    onApply: () => void;
};

const { useI18n } = createI18nModule({
    asc: { ru: 'По возрастанию', en: 'Ascending' },
    desc: { ru: 'По убыванию', en: 'Descending' },
});

export const OrderMenuGroup = (props: SortByMenuGroupProps) => {
    const { className, order, setOrder, onApply } = props;
    const t = useI18n();

    const handleSetOrder = (val: string) => {
        setOrder(val as Order);
        onApply();
    };

    return (
        <DropdownMenuRadioGroup value={order} onValueChange={handleSetOrder} className={className}>
            <DropdownMenuRadioItem className="cursor-pointer" value="asc">
                {t('asc')}
            </DropdownMenuRadioItem>
            <DropdownMenuRadioItem className="cursor-pointer" value="desc">
                {t('desc')}
            </DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
    );
};
