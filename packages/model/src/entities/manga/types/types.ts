import { ValueOf } from '@model/types/common/common';
import { Bookmarks, MangaStatus, MangaType } from '../const/const';

export type MangaTypeType = ValueOf<typeof MangaType>;
export type MangaStatusType = ValueOf<typeof MangaStatus>;
export type BookmarksType = ValueOf<typeof Bookmarks>;
