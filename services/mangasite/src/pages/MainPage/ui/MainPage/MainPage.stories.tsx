import type { Meta, StoryObj } from '@storybook/react';
import { PageDecorator } from '@packages/model/src/config/storybook/PageDecorator/PageDecorator';
import MainPage from './MainPage';
import { Header } from '@/widgets/Header';
import { mockUseGetLastUpdatedMangas } from '@/entities/MangaCard/testing';

const meta: Meta<typeof MainPage> = {
    title: 'page/MainPage',
    component: MainPage,

    tags: ['autodocs'],
    parameters: {
        msw: {
            handlers: [mockUseGetLastUpdatedMangas],
        },
    },
};

export default meta;
type Story = StoryObj<typeof MainPage>;

export const Primary: Story = {
    decorators: [PageDecorator(<Header />)],
};
