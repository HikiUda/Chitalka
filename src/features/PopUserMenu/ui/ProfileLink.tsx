import { Link } from 'react-router-dom';
import { ArrowRightIcon, UserIcon } from 'lucide-react';
import { cn } from '@/shared/lib/css';
import { createI18nModule } from '@/shared/kernel/i18n';

type ProfileLinkProps = {
    className?: string;
    username?: string;
    profileLink?: string;
};

const { useI18n } = createI18nModule({
    myProfile: { ru: 'Мой Профиль', en: 'My Profile' },
});

export const ProfileLink = (props: ProfileLinkProps) => {
    const { className, username, profileLink } = props;
    const t = useI18n();

    return (
        <Link
            to={profileLink ?? ''}
            className={cn(
                'flex gap-4 w-full items-center py-1 px-2.5 bg-primary text-primary-foreground hover:bg-primary/80 transition-colors rounded-lg',
                className,
            )}
        >
            <UserIcon />
            <div className="flex flex-col  justify-center gap-1">
                <div className="flex items-center justify-center gap-2 text-xs">
                    {t('myProfile')} <ArrowRightIcon size={12} />
                </div>
                <div>{username || '######'}</div>
            </div>
        </Link>
    );
};
