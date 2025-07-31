import { Link } from 'react-router-dom';
import { userMenuLinks } from '../model/userMenuLinks';
import { ProfileLink } from './ProfileLink';
import { LogoutButton } from './LogoutButton';
import { Separator } from '@/shared/ui/kit/separator';
import { cn } from '@/shared/lib/css';
import { useAppTheme } from '@/shared/kernel/theme';
import { createI18nModule, useAppLang } from '@/shared/kernel/i18n';

type PopUserMenuContentProps = {
    className?: string;
    username?: string;
    profileLink?: string;
};

const { useI18n } = createI18nModule({});

export const PopUserMenuContent = (props: PopUserMenuContentProps) => {
    const { className, username, profileLink } = props;
    const t = useI18n();

    const { toggleThemeMode, toggleThemeColor, themeMode, themeColor } = useAppTheme();
    const { lang, toggleLang } = useAppLang();

    return (
        <div className={cn('flex flex-col items-center justify-center gap-2', className)}>
            <ProfileLink username={username} profileLink={profileLink} />
            <Separator />
            <div className="flex flex-col self-start gap-1 w-full">
                {userMenuLinks.map(({ icon, text, to }) => (
                    <Link
                        className="flex items-center gap-2 py-2 px-3 hover:bg-secondary transition-colors w-full rounded-lg"
                        key={text}
                        to={to}
                    >
                        {icon} {text}
                    </Link>
                ))}
            </div>
            <Separator />
            <button className="self-start" type="button" onClick={() => toggleThemeMode()}>
                {t(`theme.${themeMode}`)}
            </button>
            <button className="self-start" type="button" onClick={() => toggleThemeColor()}>
                {themeColor}
            </button>
            <button className="self-start" type="button" onClick={() => toggleLang()}>
                {lang}
            </button>
            <LogoutButton className="w-full" />
        </div>
    );
};
