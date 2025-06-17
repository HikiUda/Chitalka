import { CircleHelpIcon, FoldersIcon, LibraryBigIcon, SearchIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
import { HeaderLayout } from '@/shared/ui/layout/HeaderLayout';
import { QuickSearch } from '@/features/QuickSearch';
import { PopUserMenu } from '@/features/PopUserMenu';
import { AuthModal } from '@/features/AuthModal';
import { useSession } from '@/shared/api/session';
import { getRoute } from '@/shared/kernel/router';
import { Button } from '@/shared/ui/kit/button';
import { Logo } from '@/shared/ui/Logo';

export const HeaderMain = () => {
    const { isUserAuth } = useSession();

    return (
        <HeaderLayout>
            <div className="flex items-center justify-between gap-2 h-full">
                <Logo />
                <div className="flex items-center justify-center gap-2">
                    <Button variant="clear" size="sm" asChild>
                        <Link
                            className="font-semibold hover:bg-primary/50 transition-colors duration-300"
                            to={getRoute.MANGA_CATALOG()}
                        >
                            <LibraryBigIcon size={20} /> Каталог
                        </Link>
                    </Button>
                    <Button variant="clear" size="sm" asChild>
                        <Link
                            className="font-semibold hover:bg-primary/50 transition-colors duration-300"
                            to={getRoute.COLLECTIONS()}
                        >
                            <FoldersIcon size={20} /> Коллекции
                        </Link>
                    </Button>
                    <QuickSearch
                        trigger={
                            <Button
                                variant="clear"
                                size="sm"
                                className="font-semibold hover:bg-primary/50 transition-colors duration-300"
                            >
                                <SearchIcon size={20} /> Поиск
                            </Button>
                        }
                    />
                </div>
                <div className="flex items-center justify-center gap-4">
                    <CircleHelpIcon size={25} />
                    {isUserAuth ? <PopUserMenu /> : <AuthModal />}
                </div>
            </div>
        </HeaderLayout>
    );
};
