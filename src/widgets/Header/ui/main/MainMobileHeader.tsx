import { CircleHelpIcon } from 'lucide-react';
import { HeaderLayout } from '@/shared/ui/layout/HeaderLayout';

const MainMobileHeader = () => {
    return (
        <HeaderLayout>
            <div className="flex justify-end items-center h-full">
                <CircleHelpIcon size={25} />
            </div>
        </HeaderLayout>
    );
};
export const Header = MainMobileHeader;
