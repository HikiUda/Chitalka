import type { Meta, StoryObj } from '@storybook/react';

import Svg from '@ui/assets/forStories/catalog.svg';
import { LinkList, LinkListItem } from './LinkList';

const items: LinkListItem[] = [
    {
        icon: Svg,
        text: 'История чтения',
        to: '',
    },
    {
        icon: Svg,
        text: 'Уведомления',
        to: '',
    },
    {
        icon: Svg,
        text: 'Поддержка',
        to: '',
    },
    {
        icon: Svg,
        text: 'Настройки',
        to: '',
    },
];

const meta: Meta<typeof LinkList> = {
    title: 'shared/LinkList',
    component: LinkList,

    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof LinkList>;

export const Primary: Story = {
    args: {
        items: items,
    },
};
