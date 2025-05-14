import { FC, ReactNode } from 'react';

import { HStack } from '@/shared/ui/Stack';
import { isMobile } from 'react-device-detect';
import { SidebarModal } from '../SidebarModal/SidebarModal';
import cls from './MangaTitle.module.scss';
import { MangaType } from '@/shared/api/deprecated/individualManga';

interface InfoProps {
    className?: string;
    children: ReactNode;
    manga: MangaType;
}

export const Info: FC<InfoProps> = (props) => {
    const { className, manga, children } = props;
    if (!isMobile) return children;
    return (
        <HStack className={className}>
            <SidebarModal manga={manga} className={cls.sidebar} />
            {children}
        </HStack>
    );
};
