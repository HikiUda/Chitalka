import { PopoverTrigger } from '@radix-ui/react-popover';
import { UserIcon } from 'lucide-react';
import { Suspense } from 'react';
import { useGetUserData } from '../model/useGetUserData';
import { lazyNamed } from '@/shared/lib/helpers/lazyNamed';
import { AppAdaptiveImage } from '@/shared/ui/AppAdaptiveImage';
import { Popover, PopoverBody } from '@/shared/ui/kit/popover';
import { Loader } from '@/shared/ui/kit/loader';

const PopUserMenuContent = lazyNamed(() => import('./PopUserMenuContent'), 'PopUserMenuContent');

type PopUserMenuProps = {
    className?: string;
};

export const PopUserMenu = (props: PopUserMenuProps) => {
    const { className } = props;
    const { data, profileLink } = useGetUserData();

    return (
        <Popover>
            <PopoverTrigger asChild className={className}>
                <AppAdaptiveImage
                    img={data?.avatar}
                    loadFallback={<UserIcon size={30} className="cursor-pointer" />}
                    className="w-9 h-9 shrink-0 cursor-pointer"
                />
            </PopoverTrigger>
            <PopoverBody>
                <Suspense fallback={<Loader variant="flower" className="mx-auto" />}>
                    <PopUserMenuContent username={data?.name} profileLink={profileLink} />
                </Suspense>
            </PopoverBody>
        </Popover>
    );
};
