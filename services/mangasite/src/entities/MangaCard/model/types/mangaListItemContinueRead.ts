import { MangaListItemBase } from './mangaListItemBase';

export type MangaListItemContinueReadType = Pick<
    MangaListItemBase,
    'id' | 'urlId' | 'title' | 'cover' | 'tome' | 'chapter' | 'chapterCount' | 'readedChapters'
>;
