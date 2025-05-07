import { memo, useCallback, useState } from 'react';

import { Key, Select, SelectItem } from '@/shared/Select';
import { SelectTimeRangeItem, SelectTimeRangeValues } from '../../model/types/SelectTimeRange';

interface SelectTimeRangeProps {
    onChange?: (value: SelectTimeRangeValues) => void;
}

const items: SelectTimeRangeItem[] = [
    { value: 'day', content: 'За день' },
    { value: 'week', content: 'За неделю' },
    { value: 'month', content: 'За месяц' },
];

export const SelectTimeRange = memo((props: SelectTimeRangeProps) => {
    const { onChange } = props;
    const [timeRange, setTimeRange] = useState<Key>(items[0].value);
    const onHandleChange = useCallback(
        (key: Key) => {
            setTimeRange(key);
            onChange?.(key as SelectTimeRangeValues);
        },
        [onChange],
    );
    return (
        <Select items={items} selectedKey={timeRange} onSelectionChange={onHandleChange}>
            {(item) => <SelectItem id={item.value}>{item.content}</SelectItem>}
        </Select>
    );
});
