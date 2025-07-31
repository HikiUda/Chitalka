import { LogOutIcon } from 'lucide-react';
import { useLogout } from '../model/useLogout';
import { Button } from '@/shared/ui/kit/button';
import { createI18nModule } from '@/shared/kernel/i18n';

type LogoutButtonProps = {
    className?: string;
};

const { useI18n } = createI18nModule({
    exit: { ru: 'Выйти', en: 'Exit' },
});

export const LogoutButton = (props: LogoutButtonProps) => {
    const { className } = props;
    const { logout } = useLogout();
    const t = useI18n();
    return (
        <Button onClick={logout} className={className}>
            <LogOutIcon /> {t('exit')}
        </Button>
    );
};
