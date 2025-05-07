import type { Meta, StoryObj } from '@storybook/react';
import cls from './HeaderLayout.module.scss';
import { HeaderLayout } from './HeaderLayout';

const meta: Meta<typeof HeaderLayout> = {
    title: 'layout/HeaderLayout',
    component: HeaderLayout,

    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof HeaderLayout>;

export const Primary: Story = {
    args: {
        children: 'header',
        className: cls.storybook,
    },
    decorators: [
        (Story) => (
            <div style={{ paddingTop: '50px', height: '1000px', position: 'relative' }}>
                <Story />
            </div>
        ),
    ],
};
