import { ReactRenderer } from '@storybook/react';
import { withThemeByClassName } from '@storybook/addon-themes';
//import { Theme, Disign } from '../../../lib/theme/const/theme';

export const ThemeDecorator = withThemeByClassName<ReactRenderer>({
    themes: {
        light: 'red light',
        dark: 'red dark',
    },
    defaultTheme: 'light',
    parentSelector: 'body',
});
