import type { Meta, StoryObj } from '@storybook/react';

import { CardBlock } from './CardBlock';

import cls from './CardBlock.module.scss';

const meta: Meta<typeof CardBlock> = {
    title: 'shared/CardBlock',
    component: CardBlock,

    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof CardBlock>;

export const Primary: Story = {
    args: {
        children: (
            <div>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio voluptatibus
                expedita maxime. Ducimus placeat est ipsum tempora laboriosam et illum neque maiores
                vitae aliquid minima, minus non repellendus magni at blanditiis illo aliquam rem
                deleniti debitis quibusdam dolore ea architecto tenetur. Soluta, aliquid laudantium
                libero voluptas velit dolore provident corrupti quia! Officiis eaque ipsam amet
                alias non labore sint harum.
            </div>
        ),
        backgroundColor: 'bg',
        className: cls.storybook,
    },
};
