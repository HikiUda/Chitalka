import type { Meta, StoryObj } from '@storybook/react';

import { mockGetUserData } from '@/shared/api/user/testing';
import { HeaderMainContent } from './HeaderMainContent';
import { mockQuickSearchApi } from '@/features/QuickSearchModal/testing';

const meta: Meta<typeof HeaderMainContent> = {
    title: 'widgets/Header/HeaderMainContent',
    component: HeaderMainContent,

    tags: ['autodocs'],
    parameters: {
        msw: {
            handlers: mockQuickSearchApi,
        },
    },
    decorators: [
        (Story) => (
            <div style={{ background: 'var(--accent-color)', padding: '5px 10px' }}>
                <Story />
            </div>
        ),
    ],
};

export default meta;
type Story = StoryObj<typeof HeaderMainContent>;

export const Primary: Story = {};
export const Auth: Story = {
    parameters: {
        msw: {
            handlers: [mockGetUserData, ...mockQuickSearchApi],
        },
    },
};
