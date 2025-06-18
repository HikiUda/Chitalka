import { isMobile } from 'react-device-detect';
import { ChevronLeftIcon, ChevronRightIcon, MenuIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ReactNode } from 'react';
import { cn } from '@/shared/lib/css';
import { Heading } from '@/shared/ui/kit/heading';
import { Button } from '@/shared/ui/kit/button';

type ChaptersNavigationLayoutProps = {
    className?: string;
    trigger: ReactNode;
    toPrevChapter: string | null;
    toNextChapter: string | null;
};

type TriggerButtonProps = { tome: number; chapter: number } & React.ComponentProps<'button'>;

export const TriggerButton = ({ tome, chapter, ...props }: TriggerButtonProps) => {
    if (isMobile)
        return (
            <Button
                {...props}
                variant="clear"
                size="clear"
                iconSize="auto"
                className=" hover:bg-accent transition-colors h-full"
            >
                <MenuIcon size={30} />
            </Button>
        );
    return (
        <Button
            {...props}
            variant="clear"
            size="clear"
            className="flex flex-col items-start py-1 px-3 gap-0 hover:bg-accent transition-colors h-full rounded-none"
        >
            <Heading italic variant="h5" asChild>
                <span>Оглавление</span>
            </Heading>
            <Heading weigth="semibold" asChild>
                <span>{`${tome} том ${chapter} глава`}</span>
            </Heading>
        </Button>
    );
};

export const ChaptersNavigationLayout = (props: ChaptersNavigationLayoutProps) => {
    const { className, toPrevChapter, toNextChapter, trigger } = props;

    return (
        <div className={cn('flex items-center justify-center', className)}>
            <Link
                aria-disabled={!toPrevChapter}
                to={toPrevChapter || ''}
                className="aria-disabled:pointer-events-none aria-disabled:opacity-70 h-full flex items-center hover:bg-accent transition-colors px-2"
            >
                <ChevronLeftIcon size={30} />
            </Link>
            {trigger}
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
