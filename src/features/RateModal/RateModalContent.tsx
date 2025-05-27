import { FC, useMemo, useState } from 'react';
import { isMobile } from 'react-device-detect';
import { StarIcon } from 'lucide-react';
import { useSetRate } from './useSetRate';
import { useGetRate } from './useGetRate';
import { MangaIdType } from '@/shared/kernel/manga';
import { DialogClose, DialogContent } from '@/shared/ui/kit/dialog';
import { cn } from '@/shared/lib/css';
import { Heading } from '@/shared/ui/kit/heading';
import { Button } from '@/shared/ui/kit/button';

interface RateModalContentProps {
    className?: string;
    mangaId: MangaIdType;
}

export const RateModalContent: FC<RateModalContentProps> = (props) => {
    const { className, mangaId } = props;
    const [selectedStar, setSelectedStar] = useState(0);

    const { data } = useGetRate(mangaId);
    const { setRate, getOptimisticRate } = useSetRate(mangaId);

    const rating = useMemo(() => [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], []);
    const currentRate = getOptimisticRate(data?.rate);

    const handleSetRate = (rate: number) => {
        setSelectedStar(rate);
        setRate(rate);
    };

    return (
        <DialogContent
            className={cn('max-w-130 flex flex-col justify-center items-center', className)}
            verticalPosition={isMobile ? 'bottom' : 'center'}
        >
            <Heading variant="h3">Оценка тайтла</Heading>
            <Heading variant="h2">{selectedStar || currentRate || 'Её пока нет'}</Heading>
            <div className="flex justify-center items-center gap-3 md:gap-2">
                {rating.map((rate, ind) => (
                    <Button
                        key={rate}
                        variant="clear"
                        size="clear"
                        iconSize="auto"
                        onClick={() => setSelectedStar(rate)}
                    >
                        <StarIcon
                            className={cn(
                                ind < (selectedStar || currentRate || 0)
                                    ? 'stroke-primary fill-primary'
                                    : 'stroke-muted fill-muted shadow-sm',
                            )}
                            size={isMobile ? 28 : 36}
                        />
                    </Button>
                ))}
            </div>
            <div className="flex gap-3 ">
                <DialogClose asChild>
                    <Button
                        disabled={currentRate === selectedStar}
                        onClick={() => handleSetRate(selectedStar)}
                    >
                        {currentRate ? 'Изменить' : 'Поставить'}
                    </Button>
                </DialogClose>
                {currentRate && (
                    <DialogClose asChild>
                        <Button onClick={() => handleSetRate(0)} variant="destructive">
                            Удалить
                        </Button>
                    </DialogClose>
                )}
            </div>
        </DialogContent>
    );
};
