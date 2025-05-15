import type { Meta, StoryObj } from '@storybook/react';

import { TextDisclosure } from './TextDisclosure';

const text = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum qui, quis tenetur facere error maxime omnis consequuntur amet iusto expedita aliquid eveniet pariatur hic tempora possimus nulla deserunt aut? Laboriosam deleniti reiciendis voluptatibus exercitationem soluta dolorum hic impedit quo fugit, fugiat unde consequatur mollitia saepe ipsam ullam architecto iure non!
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum qui, quis tenetur facere error maxime omnis consequuntur amet iusto expedita aliquid eveniet pariatur hic tempora possimus nulla deserunt aut? Laboriosam deleniti reiciendis voluptatibus exercitationem soluta dolorum hic impedit quo fugit, fugiat unde consequatur mollitia saepe ipsam ullam architecto iure non!';
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum qui, quis tenetur facere error maxime omnis consequuntur amet iusto expedita aliquid eveniet pariatur hic tempora possimus nulla deserunt aut? Laboriosam deleniti reiciendis voluptatibus exercitationem soluta dolorum hic impedit quo fugit, fugiat unde consequatur mollitia saepe ipsam ullam architecto iure non!';
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum qui, quis tenetur facere error maxime omnis consequuntur amet iusto expedita aliquid eveniet pariatur hic tempora possimus nulla deserunt aut? Laboriosam deleniti reiciendis voluptatibus exercitationem soluta dolorum hic impedit quo fugit, fugiat unde consequatur mollitia saepe ipsam ullam architecto iure non!';
    `;
const text2 = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum qui, quis tenetur facere error maxime omnis consequuntur amet iusto expedita aliquid eveniet pariatur hic tempora possimus nulla deserunt aut? Laboriosam deleniti reiciendis voluptatibus exercitationem soluta dolorum hic impedit quo fugit, fugiat unde consequatur mollitia saepe ipsam ullam architecto iure non! `;

const meta: Meta<typeof TextDisclosure> = {
    title: 'shared/TextDisclosure',
    component: TextDisclosure,
    argTypes: {
        defaultOpen: {
            table: {
                defaultValue: { summary: 'false' },
            },
        },
    },

    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof TextDisclosure>;

export const NoOverflow: Story = {
    args: {
        text: text2,
    },
};

export const Overflow: Story = {
    args: {
        text,
    },
};
export const OverflowOpen: Story = {
    args: {
        text,
        defaultOpen: true,
    },
};
