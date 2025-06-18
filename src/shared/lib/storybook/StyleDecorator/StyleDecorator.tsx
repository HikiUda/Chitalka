import { Decorator } from '@storybook/react';
import '@/app/styles/index.scss';

export const StyleDecorator: Decorator = (Story) => {
    document.body.style.background = 'var(--bg-color)';
    return <Story />;
};
