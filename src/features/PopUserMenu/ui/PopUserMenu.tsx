import { PopoverTrigger } from '@radix-ui/react-popover';
import { UserIcon } from 'lucide-react';
import { useUserData } from '../model/useUserData';
import { lazyNamed } from '@/shared/lib/helpers/lazyNamed';
import { AppAdaptiveImage } from '@/shared/ui/AppAdaptiveImage';
import { Popover, PopoverBody } from '@/shared/ui/kit/popover';

const PopUserMenuContent = lazyNamed(() => import('./PopUserMenuContent'), 'PopUserMenuContent');

interface PopUserMenuProps {
    className?: string;
}

export const PopUserMenu = (props: PopUserMenuProps) => {
    const { className } = props;
    const { data } = useUserData();

    return (
        <Popover>
            <PopoverTrigger asChild className={className}>
                <AppAdaptiveImage
                    img={data?.avatar}
                    loadFallback={<UserIcon size={30} className="cursor-pointer" />}
                    className="w-9 h-9 shrink-0 cursor-pointer"
                />
            </PopoverTrigger>
            <PopoverBody asChild>
                <PopUserMenuContent />
            </PopoverBody>
        </Popover>
    );
};
