import type { Meta, StoryObj } from '@storybook/react';
import { PageDecorator } from '@packages/model/src/config/storybook/PageDecorator/PageDecorator';
import MainPage from './MainPage';
import { Header } from '@/widgets/Header';

const meta: Meta<typeof MainPage> = {
    title: 'page/MainPage',
    component: MainPage,

    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof MainPage>;

export const Primary: Story = {
    decorators: [PageDecorator(<Header />)],
};
