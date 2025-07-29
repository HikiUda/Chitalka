import { ReactNode } from 'react';
import { Container } from './Container';
import { cn } from '@/shared/lib/css';

type BottomMenuLayoutProps = {
    className?: string;
    children?: ReactNode;
    hidden?: boolean;
};

export const BottomMenuLayout = (props: BottomMenuLayoutProps) => {
    const { className, children, hidden = false } = props;

    return (
        <nav
            className={cn(
                'sticky bottom-0 h-15 w-full px-2.5 py-1 z-50 transition-all scroll-locked:fixed',
                'bg-accent border-b before:absolute before:inset-0 before:bg-primary/20 before:-z-1',
                hidden && '-bottom-15',
                className,
            )}
        >
            <Container>{children}</Container>
        </nav>
    );
};
