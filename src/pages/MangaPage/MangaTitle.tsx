import { isMobile } from 'react-device-detect';
import { InfoIcon, StarIcon } from 'lucide-react';
import { ReactNode } from 'react';
import { useGetManga } from './useGetManga';
import { cn } from '@/shared/lib/css';
import { Heading } from '@/shared/ui/kit/heading';
import { toShortcutNumber } from '@/shared/lib/helpers/toShortcutNumber';
import { RateModal } from '@/features/RateModal';
import { MangaIdType } from '@/shared/kernel/manga';

const Info = ({ children }: { children: ReactNode }) => {
    if (!isMobile) return children;
    return (
        <div className="flex justify-center items-center">
            <InfoIcon />
            {children}
        </div>
    );
};

interface MangaTitleProps {
    className?: string;
    mangaId: MangaIdType;
}

export const MangaTitle = (props: MangaTitleProps) => {
    const { className, mangaId } = props;

    const { data: manga } = useGetManga(mangaId);
    if (!manga) return null;

    //TODO long
    return (
        <div
            className={cn(
                'flex',
                isMobile ? 'flex-col-reverse gap-2 items-center' : 'gap-8 w-full items-end',
                className,
            )}
        >
            <Info>
                <div className="flex flex-col justify-center items-start w-full gap-1">
                    <Heading
                        className="line-clamp-2 hyphens-auto break-all"
                        weigth="semibold"
                        variant="h2"
                    >
                        {manga.title.ru}
                    </Heading>
                    <Heading
                        className="line-clamp-1 hyphens-auto break-all"
                        weigth="semibold"
                        variant="h3"
                        italic
                    >
                        {manga.title.en}
                    </Heading>
                </div>
            </Info>
            <div
                className={cn(
                    'flex justify-center gap-1 items-end flex-col',
                    isMobile && 'bg-card py-1 px-1.5 rounded-sm items-center flex-row',
                )}
            >
                <div className="flex gap-1 items-end justify-center">
                    <StarIcon className="stroke-primary fill-primary" size={28} />
                    <span className="text-md">{manga.rate}</span>
                    <span className="opacity-80">{toShortcutNumber(manga.countRate || 0)}</span>
                </div>
                <RateModal mangaId={mangaId} />
            </div>
        </div>
    );
};
