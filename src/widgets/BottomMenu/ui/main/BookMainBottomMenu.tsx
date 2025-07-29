import { CircleHelpIcon, LibraryBigIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
import { BottomMenuLayout } from '@/shared/ui/layout/BottomMenuLayout';
import { PopUserMenu } from '@/features/PopUserMenu';
import { useSession } from '@/shared/kernel/session';
import { AuthModal } from '@/features/AuthModal';
import { LogoShort } from '@/entities/Logo';
import { GlobalNavigation } from '@/features/GlobalNavigation';

type BookMainBottomMenuProps = {
    catalogLink: string;
};

export const BookMainBottomMenu = ({ catalogLink }: BookMainBottomMenuProps) => {
    const { isUserAuth } = useSession();
    return (
        <BottomMenuLayout>
            <div className="flex items-center justify-between gap-2 h-full">
                <Link to={catalogLink}>
                    <LibraryBigIcon
                        className="stroke-primary hover:stroke-primary/50 transition-colors duration-300"
                        size={30}
                    />
                </Link>
                <GlobalNavigation iconOnly />
                <LogoShort />
                <CircleHelpIcon size={30} className="stroke-primary" />
                {isUserAuth ? <PopUserMenu /> : <AuthModal />}
            </div>
        </BottomMenuLayout>
    );
};
