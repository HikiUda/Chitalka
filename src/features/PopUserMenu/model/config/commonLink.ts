import { LinkListItem } from '@/shared/deprecate-ui/LinkList/LinkList';
import HistorySvg from '@/shared/assets/icon/common/historyBack.svg?react';
import SupportSvg from '@/shared/assets/icon/common/support.svg?react';
import SettingsSvg from '@/shared/assets/icon/common/settings.svg?react';
import NotificationSvg from '@/shared/assets/icon/common/notification.svg?react';

//TODO auth guard throw createSelector
export const commonLink: LinkListItem[] = [
    {
        icon: HistorySvg,
        text: 'История чтения',
        to: '/mangasite',
    },
    {
        icon: NotificationSvg,
        text: 'Уведомления',
        to: '/mangasite',
    },
    {
        icon: SupportSvg,
        text: 'Поддержка',
        to: '/mangasite',
    },
    {
        icon: SettingsSvg,
        text: 'Настройки',
        to: '/mangasite',
    },
];
