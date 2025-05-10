type ShortText = {
    thousand: string;
    million: string;
};

export const localeMap: Record<string, ShortText> = {
    ru: {
        thousand: 'тыс',
        million: 'м',
    },
    en: {
        thousand: 'k',
        million: 'm',
    },
} as const;

export type Options = {
    locale: keyof typeof localeMap;
};

export function toShortcutNumber(num: number, options: Options = { locale: 'ru' }): string {
    if (num < 1000) return String(num);
    if (num < 1000000) {
        return String(num).slice(0, -3) + localeMap[options.locale].thousand;
    }
    if (num < 100000000) {
        return String(num / 1000000).slice(0, 4) + localeMap[options.locale].million;
    }
    return String(num).slice(0, -6) + localeMap[options.locale].million;
}
