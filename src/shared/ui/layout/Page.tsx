import { ReactNode } from 'react';
import { Container } from './Container';
import { cn } from '@/shared/lib/css';
import { useWindowSize } from '@/shared/kernel/useWindowSize';

type PageProps = {
    className?: string;
    children?: ReactNode;
};

export const Page = (props: PageProps) => {
    const { className, children } = props;
    const isWidthLg = useWindowSize.use.isWidthLg();

    return (
        <main id="main" className={cn(className, isWidthLg ? 'pt-5 px-2.5' : 'px-1.5')}>
            <Container>{children}</Container>
        </main>
    );
};
