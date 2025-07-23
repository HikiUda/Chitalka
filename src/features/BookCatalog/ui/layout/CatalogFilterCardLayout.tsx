import { ReactNode } from 'react';
import { cn } from '@/shared/lib/css';

type CatalogFilterCardLayoutProps = {
    className?: string;
    header?: ReactNode;
    body: ReactNode;
    footer?: ReactNode;
};

export const CatalogFilterCardLayout = (props: CatalogFilterCardLayoutProps) => {
    const { className, header, body, footer } = props;
    return (
        <div className={cn('flex flex-col h-full ', className)}>
            {header}
            <div
                className={cn(
                    'overflow-auto px-4 grow flex flex-col gap-4 pb-5',
                    'scrollbar-w-3 scrollbar-hover:scrollbar-thumb-primary scrollbar scrollbar-thumb-primary/80 scrollbar-track-accent',
                )}
            >
                {body}
            </div>
            <div className="m-4">{footer}</div>
        </div>
    );
};
