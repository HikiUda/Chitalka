import { Decorator } from '@storybook/react';
// eslint-disable-next-line fsd-layer-import/layer-import
import '@/app/styles/index.scss';

export const StyleDecorator: Decorator = (Story) => {
    document.body.style.background = 'var(--bg-color)';
    return <Story />;
};
