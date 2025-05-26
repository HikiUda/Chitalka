import { StarIcon } from 'lucide-react';
import { FC } from 'react';
import { isMobile } from 'react-device-detect';
import { toShortcutNumber } from '@/shared/lib/helpers/toShortcutNumber';
import { RateModal } from '@/features/RateModal';
import { MangaIdType } from '@/shared/kernel/manga';
import { cn } from '@/shared/lib/css';

interface MangaRateProps {
    className?: string;
    rate: number;
    countRate: number;
    mangaId: MangaIdType;
}

export const MangaRate: FC<MangaRateProps> = (props) => {
    const { className, rate, countRate, mangaId } = props;
    return (
        <div
            className={cn(
                'flex justify-center gap-1 items-end flex-col',
                isMobile && 'bg-card py-1 px-1.5 rounded-sm items-center flex-row',
                className,
            )}
        >
            <div className="flex gap-1 items-end justify-end">
                <StarIcon className="stroke-primary fill-primary mb-0.5" size={20} />
                <span className="text-xl leading-5.5">{rate}</span>
                <span className="opacity-80">{toShortcutNumber(countRate)}</span>
            </div>
            <RateModal mangaId={mangaId} />
        </div>
    );
};
