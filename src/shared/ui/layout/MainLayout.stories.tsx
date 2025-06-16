import type { Meta, StoryObj } from '@storybook/react';
import { MainLayout } from './MainLayout';

const meta: Meta<typeof MainLayout> = {
    title: 'layout/MainLayout',
    component: MainLayout,

    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof MainLayout>;

export const Primary: Story = {
    args: {
        header: (
            <header
                style={{ background: 'green', position: 'fixed', width: '100%', height: '30px' }}
            >
                header
            </header>
        ),
        main: <main style={{ background: 'blue', margin: '30px 0 0 0' }}>main</main>,
        footer: <footer style={{ background: 'red' }}>footer</footer>,
        bottomMenu: <nav style={{ background: 'orange' }}>bottomMenu</nav>,
    },
};
