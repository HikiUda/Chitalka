import { ValueOf } from '@/shared/types/common/common';

export const Theme = {
    LIGHT: 'light',
    DARK: 'dark',
} as const;

export const Disign = {
    RED: 'red',
    GREEN: 'green',
} as const;

export type ThemeProps = ValueOf<typeof Theme>;
export type DisignProps = ValueOf<typeof Disign>;
