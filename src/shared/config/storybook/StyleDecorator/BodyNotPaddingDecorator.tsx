import { Decorator } from '@storybook/react';
import '@/shared/styles/index.scss';

export const BodyNotPaddingDecorator: Decorator = (Story) => {
    document.body.style.padding = '0';
    return <Story />;
};
