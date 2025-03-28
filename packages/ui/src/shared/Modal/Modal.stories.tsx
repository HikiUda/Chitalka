import type { Meta, StoryObj } from '@storybook/react';

import { Button } from '../Button';
import { Modal } from './Modal';

const meta: Meta<typeof Modal> = {
    title: 'shared/Modal',
    component: Modal,

    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Modal>;

export const Primary: Story = {
    args: {
        trigger: <Button>trigger</Button>,
        children: <Button slot="close">close</Button>,
        maxWidth: '200px',
        isOpen: true,
    },
};
