import { CircleHelpIcon, FoldersIcon, LibraryBigIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
import { BottomMenuLayout } from '@/shared/ui/layout/BottomMenuLayout';
import { PopUserMenu } from '@/features/PopUserMenu';
import { getRoute } from '@/shared/kernel/router';
import { useSession } from '@/shared/kernel/session';
import { AuthModal } from '@/features/AuthModal';
import { LogoShort } from '@/entities/Logo';

export const BottomMenuMain = () => {
    const { isUserAuth } = useSession();
    return (
        <BottomMenuLayout>
            <div className="flex items-center justify-between gap-2 h-full">
                <Link
                    className="font-semibold hover:bg-primary/50 transition-colors duration-300"
                    to={getRoute.MANGA_CATALOG()}
                >
                    <LibraryBigIcon size={30} />
                </Link>
                <Link
                    className="font-semibold hover:bg-primary/50 transition-colors duration-300"
                    to={getRoute.COLLECTIONS()}
                >
                    <FoldersIcon size={30} />
                </Link>
                <LogoShort />
                <CircleHelpIcon size={30} className="stroke-primary" />
                {isUserAuth ? <PopUserMenu /> : <AuthModal />}
            </div>
        </BottomMenuLayout>
    );
};
