import { ReactNode } from 'react';
import { Container } from './Container';
import { cn } from '@/shared/lib/css';

interface FooterLayoutProps {
    className?: string;
    children?: ReactNode;
}

export const FooterLayout = (props: FooterLayoutProps) => {
    const { className, children } = props;

    return (
        <footer className={cn('', className)}>
            <Container>{children}</Container>
        </footer>
    );
};
