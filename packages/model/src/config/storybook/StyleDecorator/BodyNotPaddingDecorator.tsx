import { Decorator } from '@storybook/react';
import '@packages/ui/src/styles/index.scss';

export const BodyNotPaddingDecorator: Decorator = (Story) => {
    document.body.style.padding = '0';
    return <Story />;
};
