import type { Meta, StoryObj } from '@storybook/react';

import { http, HttpResponse } from 'msw';
import { MyLastUpdatedTab } from './MyLastUpdatedTab';

const meta: Meta<typeof MyLastUpdatedTab> = {
    title: 'features/LastUpdatedMangaTabs/MyLastUpdatedTab',
    component: MyLastUpdatedTab,

    tags: ['autodocs'],
    parameters: {
        msw: {
            handlers: [
                http.get('*/manga/last-updated-mangas', () => {
                    return HttpResponse.json([{ title: 'Title', type: 'Manga' }]);
                }),
            ],
        },
    },
};

export default meta;
type Story = StoryObj<typeof MyLastUpdatedTab>;

export const Primary: Story = {};
