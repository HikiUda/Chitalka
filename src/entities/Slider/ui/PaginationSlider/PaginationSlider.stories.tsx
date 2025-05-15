import type { Meta, StoryObj } from '@storybook/react';

import { AppAdaptiveImage } from '@/shared/deprecate-ui/AppAdaptiveImage';
import { PaginationSlider } from './PaginationSlider';

const slides = Array(7)
    .fill(0)
    .map((img, ind) => {
        return <AppAdaptiveImage width={400} key={ind} />;
    });

const meta: Meta<typeof PaginationSlider> = {
    title: 'entities/Slider/PaginationSlider',
    component: PaginationSlider,

    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof PaginationSlider>;

export const Primary: Story = {
    args: {
        slides,
    },
    decorators: [
        (Story) => (
            <div style={{ width: 400 }}>
                <Story />
            </div>
        ),
    ],
};
