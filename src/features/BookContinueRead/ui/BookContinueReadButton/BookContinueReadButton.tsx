import { Link } from 'react-router-dom';
import { cn } from '@/shared/lib/css';
import { Button } from '@/shared/ui/kit/button';
import { createI18nModule } from '@/shared/kernel/i18n';

type BookContinueReadButtonProps = {
    className?: string;
    chapterLink: string | null;
    chapterCount: number;
    readedChapterCount: number;
};

const { useI18n } = createI18nModule({
    continue: { ru: 'Продолжить', en: 'Continue' },
    startReading: { ru: 'Начать читать', en: 'Start reading' },
});

export const BookContinueReadButton = (props: BookContinueReadButtonProps) => {
    const { className, chapterLink, chapterCount, readedChapterCount } = props;
    const t = useI18n();

    return (
        <Button
            disabled={!chapterLink}
            asChild
            className={cn(
                'flex justify-between items-center gap-1',
                !chapterLink && 'pointer-events-none aria-disabled:opacity-80',
                className,
            )}
        >
            <Link aria-disabled={!chapterLink} to={chapterLink || ''}>
                <span>{readedChapterCount ? t('continue') : t('startReading')}</span>
                <span>
                    {readedChapterCount}/{chapterCount}
                </span>
            </Link>
        </Button>
    );
};
