import { MangaListItemBase } from './mangaListItemBase';

export type MangaListItemLastUpdatedType = Pick<
    MangaListItemBase,
    'id' | 'urlId' | 'title' | 'type' | 'cover' | 'tome' | 'chapter' | 'chapterCreatedAt'
>;
