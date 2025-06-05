import { LogOutIcon } from 'lucide-react';
import { FC } from 'react';
import { useLogout } from '../model/useLogout';
import { Button } from '@/shared/ui/kit/button';

interface LogoutButtonProps {
    className?: string;
}

export const LogoutButton: FC<LogoutButtonProps> = (props) => {
    const { className } = props;
    const { logout } = useLogout();
    return (
        <Button onClick={logout} className={className}>
            <LogOutIcon /> Выйти
        </Button>
    );
};
