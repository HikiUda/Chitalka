import { BellIcon, HeadsetIcon, HistoryIcon, SettingsIcon } from 'lucide-react';
import { ReactNode } from 'react';

//TODO auth guard throw createSelector
export const userMenuLinks: { icon: ReactNode; text: string; to: string }[] = [
    {
        icon: <HistoryIcon size={18} />,
        text: 'История чтения',
        to: '/',
    },
    {
        icon: <BellIcon size={18} />,
        text: 'Уведомления',
        to: '/',
    },
    {
        icon: <HeadsetIcon size={18} />,
        text: 'Поддержка',
        to: '/',
    },
    {
        icon: <SettingsIcon size={18} />,
        text: 'Настройки',
        to: '/',
    },
];
