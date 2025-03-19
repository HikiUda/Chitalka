import { LinkListItem } from '@packages/ui/src/shared/LinkList/LinkList';
import HistorySvg from '@packages/ui/src/assets/icon/common/historyBack.svg';
import SupportSvg from '@packages/ui/src/assets/icon/common/support.svg';
import SettingsSvg from '@packages/ui/src/assets/icon/common/settings.svg';
import NotificationSvg from '@packages/ui/src/assets/icon/common/notification.svg';

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
