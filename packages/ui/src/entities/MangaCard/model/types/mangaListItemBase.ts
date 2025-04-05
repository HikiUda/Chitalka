import { MangaTypeType, BookmarksType } from '@packages/model/src/entities/manga';

export interface MangaListItemBase {
    id: number;
    urlId: string;
    title: string;
    rate: number;
    type: MangaTypeType;
    cover: string;
    views: number;
    likes: number;
    bookmarks: number;
    //TODO bookmark
    bookmark: BookmarksType | null;
    tome: number;
    chapter: number;
    chapterCreatedAt: Date;
    chapterCount: number;
    readedChapters: number;
}
