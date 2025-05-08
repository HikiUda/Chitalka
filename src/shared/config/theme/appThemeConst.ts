export const AppTheme = {
    LIGHT: 'light',
    DARK: 'dark',
} as const;

export const AppDisign = {
    RED: 'red',
    GREEN: 'green',
} as const;

export type AppThemeType = ValueOf<typeof AppTheme>;
export type AppDisignType = ValueOf<typeof AppDisign>;
