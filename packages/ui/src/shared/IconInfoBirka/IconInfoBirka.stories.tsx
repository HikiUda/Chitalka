import type { Meta, StoryObj } from '@storybook/react';
import Svg from '@ui/assets/forStories/bookmark.svg';
import { IconInfoBirka } from './IconInfoBirka';
import cls from './IconInfoBirka.module.scss';

const meta: Meta<typeof IconInfoBirka> = {
    title: 'shared/IconInfoBirka',
    component: IconInfoBirka,

    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof IconInfoBirka>;

export const Primary: Story = {
    args: {
        Svg: Svg,
        info: 'birka',
        className: cls.storybook,
    },
};
