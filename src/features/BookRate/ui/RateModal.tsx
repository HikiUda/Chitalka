import { useMemo, useState } from 'react';
import { StarIcon } from 'lucide-react';
import { DialogClose } from '@/shared/ui/kit/dialog';
import { cn } from '@/shared/lib/css';
import { Heading } from '@/shared/ui/kit/heading';
import { Button } from '@/shared/ui/kit/button';
import { useWindowSize } from '@/shared/kernel/useWindowSize';
import { createI18nModule } from '@/shared/kernel/i18n';

type RateModalContentProps = {
    className?: string;
    rate: number | null | undefined;
    setRate: (rate: number) => void;
    deleteRate: () => void;
};

const { useI18n } = createI18nModule({
    titleRating: { ru: 'Оценка тайтла', en: 'Book rating' },
    notAvailableYet: { ru: 'Её пока нет', en: "It's not available yet" },
    edit: { ru: 'Изменить', en: 'Edit' },
    set: { ru: 'Поставить', en: 'Set' },
    delete: { ru: 'Удалить', en: 'Delete' },
});

export const RateModal = (props: RateModalContentProps) => {
    const { className, rate, setRate, deleteRate } = props;
    const t = useI18n();
    const isWidthLg = useWindowSize.use.isWidthLg();
    const [selectedStar, setSelectedStar] = useState(0);
    const ratingValues = useMemo(() => [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] as const, []);

    const handleSetRate = () => {
        if (!selectedStar || selectedStar === rate) return;
        setRate(selectedStar);
    };

    const handleDeleteRate = () => {
        setSelectedStar(0);
        deleteRate();
    };

    return (
        <div className={cn('max-w-130 gap-4 flex flex-col justify-center items-center', className)}>
            <Heading variant="h3">{t('titleRating')}</Heading>
            <Heading variant="h2">{selectedStar || rate || t('notAvailableYet')}</Heading>
            <div className="flex justify-center items-center gap-3 md:gap-2">
                {ratingValues.map((val, ind) => (
                    <Button
                        key={val}
                        variant="clear"
                        size="clear"
                        iconSize="auto"
                        onClick={() => setSelectedStar(val)}
                    >
                        <StarIcon
                            className={cn(
                                ind < (selectedStar || rate || 0)
                                    ? 'stroke-primary fill-primary'
                                    : 'stroke-primary/10 fill-muted shadow-sm',
                            )}
                            size={!isWidthLg ? 28 : 36}
                        />
                    </Button>
                ))}
            </div>
            <div className="flex gap-3 ">
                <DialogClose asChild>
                    <Button disabled={rate === selectedStar} onClick={handleSetRate}>
                        {rate ? t('edit') : t('set')}
                    </Button>
                </DialogClose>
                {rate && (
                    <DialogClose asChild>
                        <Button onClick={handleDeleteRate} variant="destructive">
                            {t('delete')}
                        </Button>
                    </DialogClose>
                )}
            </div>
        </div>
    );
};
