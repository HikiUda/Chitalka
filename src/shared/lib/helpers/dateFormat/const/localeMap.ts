export const localeMap = {
    ru: 'ru-RU',
    en: 'en-GB',
} as const;

export type Options = {
    locale: keyof typeof localeMap;
};
