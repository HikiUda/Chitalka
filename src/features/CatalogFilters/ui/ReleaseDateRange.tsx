import { Heading } from '@/shared/ui/kit/heading';
import { Input } from '@/shared/ui/kit/input';

interface RangeProps {
    className?: string;
    label: string;
    from: string;
    to: string;
    setFrom: (from: string) => void;
    setTo: (to: string) => void;
}

export const ReleaseDateRange = (props: RangeProps) => {
    const { className, label, from, to, setFrom, setTo } = props;

    return (
        <div className={className}>
            <Heading color="primary">{label}</Heading>
            <div className="flex gap-1 items-center">
                <Input
                    className="p-0 px-1"
                    value={from}
                    onChangeValue={setFrom}
                    placeholder="дд.мм.гггг"
                />
                <span className="h-[1px] w-3 grow-0 bg-primary" />
                <Input
                    className="p-0 px-1"
                    value={to}
                    onChangeValue={setTo}
                    placeholder="дд.мм.гггг"
                />
            </div>
        </div>
    );
};
