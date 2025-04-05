import { Decorator } from '@storybook/react';
import '@packages/ui/src/styles/index.scss';

export const StyleDecorator: Decorator = (Story) => {
    document.body.style.background = 'var(--bg-color)';
    return <Story />;
};
