import { flattenTranslations, TranslationsNode } from './i18n';

const bookmarks = {
    Reading: {
        ru: 'Читаю',
        en: 'Reading',
    },
    Planned: {
        ru: 'Запланировано',
        en: 'Planned',
    },
    Readed: {
        ru: 'Прочитано',
        en: 'Completed',
    },
    Abandoned: {
        ru: 'Брошено',
        en: 'Abandoned',
    },
    Postponed: {
        ru: 'Отложено',
        en: 'On Hold',
    },
} satisfies TranslationsNode;

const bookStatus = {
    Ongoing: {
        ru: 'Продолжается',
        en: 'Ongoing',
    },
    Announced: {
        ru: 'Анонсировано',
        en: 'Announced',
    },
    Completed: {
        ru: 'Завершено',
        en: 'Completed',
    },
    Frozen: {
        ru: 'Заморожено',
        en: 'Frozen',
    },
    Canceled: {
        ru: 'Преостоновлен',
        en: 'Canceled',
    },
} satisfies TranslationsNode;

const mangaType = {
    Manga: {
        ru: 'Манга',
        en: 'Manga',
    },
    Manhwa: {
        ru: 'Манхва',
        en: 'Manhwa',
    },
    Manhua: {
        ru: 'Маньхуа',
        en: 'Manhua',
    },
    OEL: {
        ru: 'OEL',
        en: 'OEL',
    },
    Rumanga: {
        ru: 'Руманга',
        en: 'Rumanga',
    },
    Comic: {
        ru: 'Комикс',
        en: 'Comic',
    },
} satisfies TranslationsNode;

const ranobeType = {
    Japan: {
        ru: 'Япония',
        en: 'Japan',
    },
    Korea: {
        ru: 'Корея',
        en: 'Korea',
    },
    China: {
        ru: 'Китай',
        en: 'China',
    },
    Foreign: {
        ru: 'Иностранное',
        en: 'Foreign',
    },
    Russia: {
        ru: 'Россия',
        en: 'Russia',
    },
    Fanfic: {
        ru: 'Фанфик',
        en: 'Fanfic',
    },
} satisfies TranslationsNode;

const bookRelationship = {
    Continuation: { ru: 'Продолжение', en: 'Continuation' },
    Prequel: { ru: 'Приквел', en: 'Prequel' },
    Adaptation: { ru: 'Адаптация', en: 'Adaptation' },
    Source: { ru: 'Оригинал', en: 'Source' },
    Spinoff: { ru: 'Спин-офф', en: 'Spinoff' },
    Other: { ru: 'Другое', en: 'Other' },
} satisfies TranslationsNode;

const peopleRole = {
    Author: { ru: 'Автор', en: 'Author' },
    Artist: { ru: 'Художник', en: 'Artist' },
    Publisher: { ru: 'Издатель', en: 'Publisher' },
} satisfies TranslationsNode;

const theme = {
    light: { ru: 'Светлая', en: 'light' },
    dark: { ru: 'Тёмная', en: 'dark' },
    system: { ru: 'Системная', en: 'system' },
} satisfies TranslationsNode;

export const GlobalTranslations = {
    bookmarks,
    bookStatus,
    mangaType,
    ranobeType,
    bookRelationship,
    bookType: {
        ...mangaType,
        ...ranobeType,
    },
    peopleRole,

    theme,
} satisfies TranslationsNode;
export const GlobalTranslationsFlatten = flattenTranslations(GlobalTranslations);

export type GlobalTranslations = typeof GlobalTranslations;
