import { MangaListItemBase } from './mangaListItemBase';

export type MangaListItemStatisticType = Pick<
    MangaListItemBase,
    'id' | 'urlId' | 'title' | 'type' | 'cover' | 'views' | 'likes' | 'bookmarks'
>;
