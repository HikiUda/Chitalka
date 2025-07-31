import { CircleHelpIcon, LibraryBigIcon, SearchIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ReactNode } from 'react';
import { HeaderLayout } from '@/shared/ui/layout/HeaderLayout';
import { PopUserMenu } from '@/features/PopUserMenu';
import { AuthModal } from '@/features/AuthModal';
import { useSession } from '@/shared/kernel/session';
import { Button } from '@/shared/ui/kit/button';
import { Logo } from '@/entities/Logo';
import { GlobalNavigation } from '@/features/GlobalNavigation';
import { createI18nModule } from '@/shared/kernel/i18n';

type BookMainHeaderProps = {
    quickSearch: (trigger: ReactNode) => ReactNode;
    catalogLink: string;
};

const { useI18n } = createI18nModule({
    search: { ru: 'Поиск', en: 'Search' },
    catalog: { ru: 'Каталог', en: 'Catalog' },
});

export const BookMainHeader = (props: BookMainHeaderProps) => {
    const { quickSearch, catalogLink } = props;
    const t = useI18n();
    const { isUserAuth } = useSession();

    return (
        <HeaderLayout>
            <div className="flex items-center justify-between gap-2 h-full">
                <Logo />
                <div className="flex items-center justify-center gap-2">
                    <Button variant="clear" size="sm" asChild>
                        <Link
                            className="hover:bg-primary/50 transition-colors duration-300"
                            to={catalogLink}
                        >
                            <LibraryBigIcon size={20} /> {t('catalog')}
                        </Link>
                    </Button>
                    <GlobalNavigation />
                    {quickSearch(
                        <Button
                            variant="clear"
                            size="sm"
                            className="hover:bg-primary/50 transition-colors duration-300"
                        >
                            <SearchIcon size={20} /> {t('search')}
                        </Button>,
                    )}
                </div>
                <div className="flex items-center justify-center gap-4">
                    <CircleHelpIcon size={25} />
                    {isUserAuth ? <PopUserMenu /> : <AuthModal />}
                </div>
            </div>
        </HeaderLayout>
    );
};
