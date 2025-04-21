import type { Meta, StoryObj } from '@storybook/react';

import { Toast } from './Toast';
import { ToastQueue } from '.';

const meta: Meta<typeof Toast> = {
    title: 'shared/Toast',
    component: Toast,

    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Toast>;

export const Primary: Story = {
    play: async () => {
        ToastQueue.add({ title: 'Title', description: 'toastDescription' });
        ToastQueue.add({
            title: 'TitleTitle TitleTitle Title',
            description:
                'toastDescription toastDescriptiontoastDescriptiontoastDescription toastDescriptiontoastDescription toastDescription toastDescription',
        });
    },
};
