import { ReactNode } from 'react';
import { isMobile } from 'react-device-detect';
import { Container } from './Container';
import { cn } from '@/shared/lib/css';

interface PageProps {
    className?: string;
    children?: ReactNode;
}

export const Page = (props: PageProps) => {
    const { className, children } = props;

    return (
        <main id="main" className={cn(className, !isMobile ? 'pt-5 px-2.5' : 'px-1.5')}>
            <Container>{children}</Container>
        </main>
    );
};
