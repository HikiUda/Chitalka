import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ReactNode } from 'react';
import { cn } from '@/shared/lib/css';

type ChaptersNavigationLayoutProps = {
    className?: string;
    children: ReactNode;
    toPrevChapter: string | null;
    toNextChapter: string | null;
};

export const ChaptersNavigationLayout = (props: ChaptersNavigationLayoutProps) => {
    const { className, toPrevChapter, toNextChapter, children } = props;

    return (
        <div className={cn('flex items-center justify-center', className)}>
            <Link
                aria-disabled={!toPrevChapter}
                to={toPrevChapter || ''}
                className="aria-disabled:pointer-events-none aria-disabled:opacity-70 h-full flex items-center hover:bg-accent transition-colors px-2"
            >
                <ChevronLeftIcon size={30} />
            </Link>
            {children}
            <Link
                aria-disabled={!toNextChapter}
                to={toNextChapter || ''}
                className="aria-disabled:pointer-events-none aria-disabled:opacity-70 h-full flex items-center  hover:bg-accent transition-colors px-2"
            >
                <ChevronRightIcon size={30} />
            </Link>
        </div>
    );
};
