import type { Meta, StoryObj } from '@storybook/react';

import { mockGetUserData } from '@packages/model/src/api/user/testing';
import { HeaderQuickSearch } from './HeaderQuickSearch';
import { mockQuickSearchApi } from '@/features/QuickSearchModal/testing';

const meta: Meta<typeof HeaderQuickSearch> = {
    title: 'widgets/Header/HeaderQuickSearch',
    component: HeaderQuickSearch,

    tags: ['autodocs'],
    parameters: {
        msw: {
            handlers: [mockGetUserData, ...mockQuickSearchApi],
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
type Story = StoryObj<typeof HeaderQuickSearch>;

export const Primary: Story = {};
