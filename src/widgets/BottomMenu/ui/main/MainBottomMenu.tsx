import { BottomMenuLayout } from '@/shared/ui/layout/BottomMenuLayout';
import { PopUserMenu } from '@/features/PopUserMenu';
import { useSession } from '@/shared/kernel/session';
import { AuthModal } from '@/features/AuthModal';
import { LogoShort } from '@/entities/Logo';
import { GlobalNavigation } from '@/features/GlobalNavigation';

const MainBottomMenu = () => {
    const { isUserAuth } = useSession();
    return (
        <BottomMenuLayout>
            <div className="flex items-center justify-around gap-2 h-full">
                <GlobalNavigation />
                <LogoShort />
                {isUserAuth ? <PopUserMenu /> : <AuthModal />}
            </div>
        </BottomMenuLayout>
    );
};
export const BottomMenu = MainBottomMenu;
