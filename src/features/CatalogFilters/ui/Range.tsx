import { useCallback } from 'react';
import { Heading } from '@/shared/ui/kit/heading';
import { Input } from '@/shared/ui/kit/input';

interface RangeProps {
    className?: string;
    label: string;
    from: number;
    to: number;
    setFrom: (from: number) => void;
    setTo: (to: number) => void;
}

export const Range = (props: RangeProps) => {
    const { className, label, from, to, setFrom, setTo } = props;

    const handleSetFrom = useCallback(
        (val: string) => {
            setFrom(Number(val));
        },
        [setFrom],
    );

    const handleSetTo = useCallback(
        (val: string) => {
            setTo(Number(val));
        },
        [setTo],
    );

    return (
        <div className={className}>
            <Heading color="primary">{label}</Heading>
            <div className="flex gap-1 items-center">
                <Input
                    className="p-0 px-1"
                    value={from}
                    onChangeValue={handleSetFrom}
                    placeholder="From"
                    type="number"
                    min={0}
                />
                <span className="h-[1px] w-3 grow-0 bg-primary" />
                <Input
                    className="p-0 px-1"
                    value={to}
                    onChangeValue={handleSetTo}
                    placeholder="To"
                    type="number"
                    min={0}
                />
            </div>
        </div>
    );
};
