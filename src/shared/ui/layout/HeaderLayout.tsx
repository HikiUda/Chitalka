import { FC, ReactNode } from 'react';
import { Container } from './Container';
import { cn } from '@/shared/lib/css';

type HeaderLayoutProps = {
    className?: string;
    children?: ReactNode;
    hidden?: boolean;
};

export const HeaderLayout: FC<HeaderLayoutProps> = (props) => {
    const { className, children, hidden = false } = props;

    return (
        <header
            className={cn(
                'sticky top-0 h-15 w-full px-2.5 py-1 z-50 transition-all scroll-locked:fixed',
                'bg-accent border-b before:absolute before:inset-0 before:bg-primary/20 before:-z-1',
                hidden && '-top-15',
                className,
            )}
        >
            <Container>{children}</Container>
        </header>
    );
};
