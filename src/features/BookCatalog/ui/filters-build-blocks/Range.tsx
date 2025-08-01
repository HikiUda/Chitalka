import { memo, useCallback } from 'react';
import { Heading } from '@/shared/ui/kit/heading';
import { Input } from '@/shared/ui/kit/input';
import { createI18nModule } from '@/shared/kernel/i18n';

type RangeProps = {
    className?: string;
    label: string;
    from: number | undefined;
    to: number | undefined;
    setFrom: (from: number) => void;
    setTo: (to: number) => void;
    max?: number;
};

const { useI18n } = createI18nModule({
    from: { ru: 'От', en: 'From' },
    to: { ru: 'До', en: 'To' },
});

export const Range = memo((props: RangeProps) => {
    const { className, label, from, to, setFrom, setTo, max } = props;
    const t = useI18n();

    const handleSetFrom = useCallback(
        (val: string) => {
            setFrom(Math.floor(Number(val)));
        },
        [setFrom],
    );

    const handleSetTo = useCallback(
        (val: string) => {
            setTo(Math.floor(Number(val)));
        },
        [setTo],
    );

    return (
        <div className={className}>
            <Heading color="primary">{label}</Heading>
            <div className="flex gap-1 items-center">
                <Input
                    className="p-0 px-1"
                    value={String(from).replace('NaN', '')}
                    onChangeValue={handleSetFrom}
                    placeholder={t('from')}
                    type="number"
                    min={0}
                    max={max}
                />
                <span className="h-[1px] w-3 grow-0 bg-primary" />
                <Input
                    className="p-0 px-1"
                    value={String(to).replace('NaN', '')}
                    onChangeValue={handleSetTo}
                    placeholder={t('to')}
                    type="number"
                    min={0}
                    max={max}
                />
            </div>
        </div>
    );
});
Range.displayName = 'Range';
