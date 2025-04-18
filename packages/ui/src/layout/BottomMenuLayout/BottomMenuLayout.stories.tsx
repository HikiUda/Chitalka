import type { Meta, StoryObj } from '@storybook/react';
import cls from './BottomMenuLayout.module.scss';

import { BottomMenuLayout } from './BottomMenuLayout';

const meta: Meta<typeof BottomMenuLayout> = {
    title: 'layout/BottomMenuLayout',
    component: BottomMenuLayout,

    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof BottomMenuLayout>;

export const Primary: Story = {
    args: {
        children: 'bottomMenu',
        className: cls.storybook,
    },
    decorators: [
        (Story) => (
            <div style={{ height: '1000px', position: 'relative' }}>
                <Story />
            </div>
        ),
    ],
};
