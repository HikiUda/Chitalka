import { memo } from 'react';
import { Button } from '@/shared/ui/kit/button';
import { cn } from '@/shared/lib/css';
import { createI18nModule } from '@/shared/kernel/i18n';

type CommonFooterProps = {
    className?: string;
    onApply: () => void;
    onReset: () => void;
};

const { useI18n } = createI18nModule({
    reset: { ru: 'Сбросить', en: 'Reset' },
    apply: { ru: 'Применить', en: 'Apply' },
});

export const CommonFooter = memo((props: CommonFooterProps) => {
    const { onApply, onReset, className } = props;
    const t = useI18n();
    return (
        <div className={cn('flex gap-2 items-center justify-around', className)}>
            <Button onClick={onApply} className="basis-[45%]">
                {t('apply')}
            </Button>
            <Button variant="secondary" onClick={onReset} className="basis-[45%]">
                {t('reset')}
            </Button>
        </div>
    );
});
CommonFooter.displayName = 'CommonFooter';
