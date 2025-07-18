/* eslint-disable @typescript-eslint/no-explicit-any */
import { href } from 'react-router-dom';
import { BookId } from '../book/book';
import { Routes } from './routerConfig';

type ChapterId =
    | number
    | {
          tome: number;
          chapter: number;
          chapterId: number;
      };

function getUrlChapterId(chapterIdProps: ChapterId) {
    if (typeof chapterIdProps === 'number') return String(chapterIdProps);

    const { tome, chapter, chapterId } = chapterIdProps;
    return `${tome}-tome--${chapter}-chapter---${chapterId}`.replaceAll('.', ',');
}

export const getRoute = {
    MAIN: () => Routes.MAIN,

    // * Manga
    MANGA: (mangaId: BookId) => href(Routes.MANGA, { mangaId: String(mangaId) }),
    MANGA_CATALOG: () => Routes.MANGA_CATALOG,
    MANGA_READ: (mangaId: BookId, chapterId: ChapterId) =>
        href(Routes.MANGA_READ, {
            mangaId: String(mangaId),
            chapterId: getUrlChapterId(chapterId),
        }),
    // * Manga

    // * Ranobe
    RANOBE: (ranobeId: BookId) => href(Routes.RANOBE, { ranobeId: String(ranobeId) }),
    RANOBE_CATALOG: () => Routes.RANOBE_CATALOG,
    RANOBE_READ: (ranobeId: BookId, chapterId: ChapterId) =>
        href(Routes.RANOBE_READ, {
            ranobeId: String(ranobeId),
            chapterId: getUrlChapterId(chapterId),
        }),
    // * Ranobe

    // * People
    PEOPLE: () => Routes.PEOPLE,
    PEOPLE_NAME: (name: string) => href(Routes.PEOPLE_NAME, { name }),
    // * People

    COLLECTIONS: () => Routes.COLLECTIONS,
} as const satisfies Record<keyof typeof Routes, (...args: any[]) => string>;
