import { MangaListItemBase } from './mangaListItemBase';

export type MangaListItemLastUpdated = Pick<
    MangaListItemBase,
    'id' | 'urlId' | 'title' | 'type' | 'cover' | 'tome' | 'chapter' | 'chapterCreatedAt'
>;
