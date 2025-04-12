import type { UserData } from '@model/api/auth/types/user';
import type { BookmarksType, MangaStatusType, MangaTypeType } from '@model/entities/manga';

export interface MangaTitle {
    ru: string;
    en: string | null;
    origin: string | null;
}

export interface MangaGenresAndTagType {
    id: number;
    title: string;
}

export interface MangaType {
    id: number;
    urlId: string;
    title: MangaTitle;
    otherTitles: string[];
    description: string;
    chaptersCount: number;
    rate: number;
    countRate: number;
    releaseDate: Date | null;
    status: MangaStatusType;
    type: MangaTypeType;
    genres: MangaGenresAndTagType[];
    tags: MangaGenresAndTagType[];
    cover: string | null;
    banner: string | null;
    owner: Omit<UserData, 'jsonSettings'>;
    authors: string[];
    artists: string[];
    publishers: string[];
    bookmark: BookmarksType | null;
}
