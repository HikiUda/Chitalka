import { FC } from 'react';
import { Link } from 'react-router-dom';
import { useUserData } from '../model/useUserData';
import { userMenuLinks } from '../model/userMenuLinks';
import { ProfileLink } from './ProfileLink';
import { LogoutButton } from './LogoutButton';
import { Separator } from '@/shared/ui/kit/separator';
import { cn } from '@/shared/lib/css';
import { useAppTheme } from '@/shared/kernel/theme';
import { PopoverContent } from '@/shared/ui/kit/popover';

interface PopUserMenuContentProps {
    className?: string;
}

export const PopUserMenuContent: FC<PopUserMenuContentProps> = (props) => {
    const { className } = props;

    const { data } = useUserData();
    const { toggleTheme } = useAppTheme();
    return (
        <PopoverContent
            className={cn('flex flex-col items-center justify-center gap-2', className)}
        >
            <ProfileLink username={data?.name} />
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
            <button className="self-start" type="button" onClick={toggleTheme}>
                theme
            </button>
            <LogoutButton className="w-full" />
        </PopoverContent>
    );
};
