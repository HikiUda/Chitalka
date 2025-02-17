import { ValueOf } from '../../../types/common/common';

export const Theme = {
    LIGHT: 'light',
    DARK: 'dark',
} as const;

export const Disign = {
    RED: 'red',
} as const;

export type ThemeProps = ValueOf<typeof Theme>;
export type DisignProps = ValueOf<typeof Disign>;
