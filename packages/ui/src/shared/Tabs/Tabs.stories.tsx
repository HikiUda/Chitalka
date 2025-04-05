import type { Meta, StoryObj } from '@storybook/react';

import { MyTabs as Tabs } from './Tabs';

const content1 =
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam eveniet culpa corrupti, alias tenetur ea ratione odio, unde magnam voluptates veritatis sed quis! Soluta ducimus a culpa natus autem porro? Consequatur tempore suscipit hic voluptate quasi ullam asperiores aspernatur rerum aliquid, repellat natus, laboriosam dolor?';
const content2 =
    'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit, expedita! Distinctio magni aliquam suscipit temporibus, voluptatem deleniti ad, omnis minima harum mollitia qui debitis modi maiores unde praesentium autem eum?';
const content3 =
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum, architecto. Veniam id nihil nesciunt aperiam, expedita mollitia eius magnam similique obcaecati adipisci est atque impedit, nisi recusandae quia quo praesentium delectus reprehenderit repellat! Velit, unde! Ipsum, dolorem. Quo tempore labore, pariatur excepturi qui suscipit magni dolor, rem, laborum porro ab quam quae sint! Quos totam non dolor quia omnis asperiores?';

const tabs = [
    {
        id: 1,
        title: 'tab1',
        content: content1,
    },
    {
        id: 2,
        title: 'tab2',
        content: content2,
    },
    {
        id: 3,
        title: 'tab3',
        content: content3,
    },
];
/** Other props see in the react aria documentation Tabs */
const meta: Meta<typeof Tabs> = {
    title: 'shared/Tabs',
    component: Tabs,

    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Tabs>;

export const Primary: Story = {
    args: {
        tabs,
    },
};
