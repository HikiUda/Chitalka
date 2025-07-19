import { ReactNode } from 'react';
import { Slot } from '@radix-ui/react-slot';
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
            <div className="overflow-auto px-4 grow flex flex-col gap-4">{body}</div>
            <Slot className="mx-4 mb-4">{footer}</Slot>
        </div>
    );
};
