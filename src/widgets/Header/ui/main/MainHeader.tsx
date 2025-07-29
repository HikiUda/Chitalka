import { CircleHelpIcon } from 'lucide-react';
import { HeaderLayout } from '@/shared/ui/layout/HeaderLayout';
import { PopUserMenu } from '@/features/PopUserMenu';
import { AuthModal } from '@/features/AuthModal';
import { useSession } from '@/shared/kernel/session';
import { Logo } from '@/entities/Logo';
import { GlobalNavigation } from '@/features/GlobalNavigation';

const MainHeader = () => {
    const { isUserAuth } = useSession();

    return (
        <HeaderLayout>
            <div className="flex items-center justify-between gap-2 h-full">
                <Logo />
                <GlobalNavigation />
                <div className="flex items-center justify-center gap-4">
                    <CircleHelpIcon size={25} />
                    {isUserAuth ? <PopUserMenu /> : <AuthModal />}
                </div>
            </div>
        </HeaderLayout>
    );
};
export const Header = MainHeader;
