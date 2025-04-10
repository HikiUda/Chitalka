import { BookmarksType } from '@packages/model/src/entities/manga';

export interface UserMangaBookmarkType {
    mangaId: number;
    user: number;
    bookmark: BookmarksType | null;
}
