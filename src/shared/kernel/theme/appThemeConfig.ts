export const AppThemeMode = {
    Light: 'light',
    Dark: 'dark',
    System: 'system',
} as const;

export const AppThemeColor = {
    Blue: 'blue',
    Brown: 'brown',
    Green: 'green',
    Red: 'red',
    Violet: 'violet',
} as const;

export type AppThemeMode = ValueOf<typeof AppThemeMode>;
export type AppThemeColor = ValueOf<typeof AppThemeColor>;

export type AppTheme = {
    mode: AppThemeMode;
    color: AppThemeColor;
};

export const AppThemeModeMatcher: Record<AppThemeMode, AppThemeMode> = {
    light: 'dark',
    dark: 'system',
    system: 'light',
} as const;
export const AppThemeColorMatcher: Record<AppThemeColor, AppThemeColor> = {
    blue: 'brown',
    brown: 'green',
    green: 'red',
    red: 'violet',
    violet: 'blue',
} as const;
