import { LogOutIcon } from 'lucide-react';
import { useLogout } from '../model/useLogout';
import { Button } from '@/shared/ui/kit/button';

type LogoutButtonProps = {
    className?: string;
};

export const LogoutButton = (props: LogoutButtonProps) => {
    const { className } = props;
    const { logout } = useLogout();
    return (
        <Button onClick={logout} className={className}>
            <LogOutIcon /> Выйти
        </Button>
    );
};
