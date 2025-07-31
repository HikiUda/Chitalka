import { ReactNode } from 'react';
import { MoveLeftIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
import { HeaderLayout } from '@/shared/ui/layout/HeaderLayout';
import { Heading } from '@/shared/ui/kit/heading';
import { createI18nModule } from '@/shared/kernel/i18n';

type BookCatalogHeaderProps = {
    filters: ReactNode;
    sortByOrder: ReactNode;
    backLink: string;
};

const { useI18n } = createI18nModule({
    goToHome: { ru: 'На главную', en: 'Go to Home' },
});

export const BookCatalogHeader = (props: BookCatalogHeaderProps) => {
    const { filters, sortByOrder, backLink } = props;
    const t = useI18n();
    return (
        <HeaderLayout>
            <div className="flex items-center justify-between h-full">
                <div className="flex gap-1 items-center">
                    <MoveLeftIcon />
                    <Heading variant="h3" asChild>
                        <Link to={backLink}>{t('goToHome')}</Link>
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
