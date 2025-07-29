import { ReactNode } from 'react';

type MainLayoutProps = {
    header: ReactNode;
    main: ReactNode;
    footer?: ReactNode;
    bottomMenu?: ReactNode;
    toaster?: ReactNode;
};

export const MainLayout = (props: MainLayoutProps) => {
    const { header, footer, main, bottomMenu, toaster } = props;

    return (
        <div className="relative min-h-[100vh] grid grid-rows-[auto_1fr_auto_auto] bg-background">
            {header}
            {main}
            {footer}
            {bottomMenu}
            {toaster}
        </div>
    );
};
