import { BookmarksType, MangaStatusType, MangaTypeType } from '@packages/model/src/entities/manga';
import { OrderType, SortByType } from '@/shared/api/mangaList';

export interface SearchSlice {
    search: string;
    setSearch: (search: string) => void;
}
export interface SortByOrderSlice {
    sortBy: SortByType;
    order: OrderType;
    setSortBy: (sortBy: SortByType) => void;
    setOrder: (order: OrderType) => void;
}
export interface ChapterCountSlice {
    chapterCountFrom: number;
    chapterCountTo: number;
    setChapterCountFrom: (chapterCountFrom: number) => void;
    setChapterCountTo: (chapterCountTo: number) => void;
}
export interface RateCountSlice {
    rateCountFrom: number;
    rateCountTo: number;
    setRateCountFrom: (rateCountFrom: number) => void;
    setRateCountTo: (rateCountTo: number) => void;
}
export interface RateSlice {
    rateFrom: number;
    rateTo: number;
    setRateFrom: (rateFrom: number) => void;
    setRateTo: (rateTo: number) => void;
}
export interface AgeRateSlice {
    ageRateFrom: number;
    ageRateTo: number;
    setAgeRateFrom: (ageRateFrom: number) => void;
    setAgeRateTo: (ageRateTo: number) => void;
}
export interface ReleaseDateSlice {
    releaseDateFrom: number;
    releaseDateTo: number;
    setReleaseDateFrom: (releaseDateFrom: number) => void;
    setReleaseDateTo: (releaseDateTo: number) => void;
}
export interface MangaTypeSlice {
    type: MangaTypeType[];
    setType: (t: MangaTypeType) => void;
}
export interface MangaStatusSlice {
    status: MangaStatusType[];
    setStatus: (t: MangaStatusType) => void;
}
export interface BookmarksSlice {
    bookmarks: BookmarksType[];
    setBookmarks: (t: BookmarksType) => void;
}

export type TriSwitchState = 'include' | 'exclude' | 'none';

export interface GenresSlice {
    genres: number[];
    notGenres: number[];
    switchGenre: (genre: number, toState: TriSwitchState) => void;
}
export interface TagsSlice {
    tags: number[];
    notTags: number[];
    switchTag: (genre: number, toState: TriSwitchState) => void;
}

export type CatalogFiltersStoreType = SearchSlice &
    SortByOrderSlice &
    ChapterCountSlice &
    RateCountSlice &
    RateSlice &
    AgeRateSlice &
    ReleaseDateSlice &
    MangaTypeSlice &
    MangaStatusSlice &
    BookmarksSlice &
    GenresSlice &
    TagsSlice;
