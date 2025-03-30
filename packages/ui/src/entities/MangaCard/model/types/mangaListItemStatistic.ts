import { MangaListItemBase } from './mangaListItemBase';

export type MangaListItemStatistic = Pick<
    MangaListItemBase,
    'id' | 'urlId' | 'title' | 'type' | 'cover' | 'views' | 'likes' | 'bookmarks'
>;
