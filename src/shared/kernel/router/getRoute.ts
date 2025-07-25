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
      }
    | {
          tome: number;
          chapter: number;
          id: number;
      };

type UserId = number | { name: string; userId: number };

function getUrlChapterId(props: ChapterId) {
    if (typeof props === 'number') return String(props);

    const { tome, chapter } = props;
    const chapterId = 'chapterId' in props ? props.chapterId : props.id;
    return `${tome}-tome--${chapter}-chapter---${chapterId}`.replaceAll('.', ',');
}

function getUrlUserId(props: UserId) {
    if (typeof props === 'number') return String(props);
    return `${props.name}---${props.userId}`;
}

export const getRoute = {
    MAIN: () => Routes.MAIN,

    // * Manga
    MANGA: (mangaId: BookId) => href(Routes.MANGA, { mangaId: String(mangaId) }),
    MANGA_SECTION: () => Routes.MANGA_SECTION,
    MANGA_CATALOG: () => Routes.MANGA_CATALOG,
    MANGA_READ: (mangaId: BookId, chapterId: ChapterId) =>
        href(Routes.MANGA_READ, {
            mangaId: String(mangaId),
            chapterId: getUrlChapterId(chapterId),
        }),
    // * Manga

    // * Ranobe
    RANOBE: (ranobeId: BookId) => href(Routes.RANOBE, { ranobeId: String(ranobeId) }),
    RANOBE_SECTION: () => Routes.RANOBE_SECTION,
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
    PROFILE: (userId: UserId) => href(Routes.PROFILE, { userId: getUrlUserId(userId) }),
    NOTFOUND: () => Routes.NOTFOUND,
} as const satisfies Record<keyof typeof Routes, (...args: any[]) => string>;
