/* eslint-disable @typescript-eslint/no-explicit-any */
import { useCallback } from 'react';
import { useAppLangContext } from './i18nContext';
import { GlobalTranslations, GlobalTranslationsFlatten } from './globalTranslations';

export const AppLang = {
    ru: 'ru',
    en: 'en',
} as const;
export type AppLang = ValueOf<typeof AppLang>;

type TranslationsLeaf = { [K in AppLang]: string | ((...args: any[]) => string) };

export type TranslationsNode = { [name: string]: TranslationsLeaf | TranslationsNode };

export function flattenTranslations(translations: TranslationsNode) {
    const result: Record<string, string | ((...args: any[]) => string) | undefined> = {};

    function flattenHelper(obj: TranslationsNode | TranslationsLeaf, path = '') {
        for (const key in obj) {
            const newPath = path ? `${path}.${key}` : key;
            const value = obj[key as keyof typeof obj];
            if (typeof value === 'object' && value !== null) {
                flattenHelper(value, newPath);
            } else {
                result[newPath] = value;
            }
        }
    }

    flattenHelper(translations);
    return result;
}

type KeyString<T> = T extends string ? T : never;

type TranslationKey<T extends TranslationsNode, P extends string = ''> = {
    [K in keyof T]: T[K] extends TranslationsLeaf
        ? `${P}${KeyString<K>}`
        : T[K] extends TranslationsNode
          ? TranslationKey<T[K], `${KeyString<K>}.`>
          : never;
}[keyof T];

export function createI18nModule<T extends TranslationsNode>(tree: T) {
    const flattenedTree = flattenTranslations(tree);

    function useI18n() {
        const { lang } = useAppLangContext();
        return useCallback(
            (key: TranslationKey<T & GlobalTranslations>, args?: (string | number)[]) => {
                const value =
                    flattenedTree[`${key}.${lang}`] ||
                    GlobalTranslationsFlatten[`${key}.${lang}`] ||
                    key;
                if (typeof value === 'string') return value;
                return value(...(args as any[]));
            },
            [lang],
        );
    }

    return { useI18n };
}
