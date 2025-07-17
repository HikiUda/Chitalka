import { useMemo, useState } from 'react';
import { isMobile } from 'react-device-detect';
import { StarIcon } from 'lucide-react';
import { DialogClose } from '@/shared/ui/kit/dialog';
import { cn } from '@/shared/lib/css';
import { Heading } from '@/shared/ui/kit/heading';
import { Button } from '@/shared/ui/kit/button';

type RateModalContentProps = {
    className?: string;
    rate: number | null | undefined;
    setRate: (rate: number) => void;
    deleteRate: () => void;
};

export const RateModal = (props: RateModalContentProps) => {
    const { className, rate, setRate, deleteRate } = props;
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
            <Heading variant="h3">Оценка тайтла</Heading>
            <Heading variant="h2">{selectedStar || rate || 'Её пока нет'}</Heading>
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
                            size={isMobile ? 28 : 36}
                        />
                    </Button>
                ))}
            </div>
            <div className="flex gap-3 ">
                <DialogClose asChild>
                    <Button disabled={rate === selectedStar} onClick={handleSetRate}>
                        {rate ? 'Изменить' : 'Поставить'}
                    </Button>
                </DialogClose>
                {rate && (
                    <DialogClose asChild>
                        <Button onClick={handleDeleteRate} variant="destructive">
                            Удалить
                        </Button>
                    </DialogClose>
                )}
            </div>
        </div>
    );
};
