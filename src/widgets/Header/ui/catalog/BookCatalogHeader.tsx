import { ReactNode } from 'react';
import { MoveLeftIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
import { HeaderLayout } from '@/shared/ui/layout/HeaderLayout';
import { Heading } from '@/shared/ui/kit/heading';

type BookCatalogHeaderProps = {
    filters: ReactNode;
    sortByOrder: ReactNode;
    backLink: string;
};

export const BookCatalogHeader = (props: BookCatalogHeaderProps) => {
    const { filters, sortByOrder, backLink } = props;
    return (
        <HeaderLayout>
            <div className="flex items-center justify-between h-full">
                <div className="flex gap-1 items-center">
                    <MoveLeftIcon />
                    <Heading variant="h3" asChild>
                        <Link to={backLink}>На главную</Link>
                    </Heading>
                </div>
                <div className="flex items-center gap-2">
                    {filters}
                    {sortByOrder}
                </div>
            </div>
        </HeaderLayout>
    );
};
