import { LinkListItem } from '@/shared/ui/LinkList/LinkList';
import HistorySvg from '@/shared/assets/icon/common/historyBack.svg';
import SupportSvg from '@/shared/assets/icon/common/support.svg';
import SettingsSvg from '@/shared/assets/icon/common/settings.svg';
import NotificationSvg from '@/shared/assets/icon/common/notification.svg';

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
