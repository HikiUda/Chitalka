import { Link } from 'react-router-dom';
import { ArrowRightIcon, UserIcon } from 'lucide-react';
import { cn } from '@/shared/lib/css';

interface ProfileLinkProps {
    className?: string;
    username?: string;
}

export const ProfileLink = (props: ProfileLinkProps) => {
    const { className, username } = props;

    return (
        <Link
            //TODO link
            to={'/'}
            className={cn(
                'flex gap-4 w-full items-center py-1 px-2.5 bg-primary text-primary-foreground hover:bg-primary/80 transition-colors rounded-lg',
                className,
            )}
        >
            <UserIcon />
            <div className="flex flex-col  justify-center gap-1">
                <div className="flex items-center justify-center gap-2 text-xs">
                    Мой Профиль <ArrowRightIcon size={12} />
                </div>
                <div>{username || '######'}</div>
            </div>
        </Link>
    );
};
