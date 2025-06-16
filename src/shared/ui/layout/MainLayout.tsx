import { ReactNode } from 'react';
import { Toaster } from '../kit/sonner';

interface MainLayoutProps {
    header: ReactNode;
    main: ReactNode;
    footer?: ReactNode;
    bottomMenu?: ReactNode;
}

export const MainLayout = (props: MainLayoutProps) => {
    const { header, footer, main, bottomMenu } = props;

    return (
        <div className="relative min-h-[100vh] grid grid-rows-[auto_1fr_auto_auto] bg-background">
            {header}
            {main}
            {footer}
            {bottomMenu}
            <Toaster />
        </div>
    );
};
