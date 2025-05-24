import { Link } from 'react-router-dom';
import { cn } from '@/shared/lib/css';
import { Button } from '@/shared/ui/kit/button';

interface ContinueReadMangaButtonProps {
    className?: string;
}

export const ContinueReadMangaButton = (props: ContinueReadMangaButtonProps) => {
    const { className } = props;

    return (
        <Button asChild className={cn('flex justify-between items-center gap-1', className)}>
            <Link to="">
                <span>Начать читать</span>
                <span>0/565</span>
            </Link>
        </Button>
    );
};
