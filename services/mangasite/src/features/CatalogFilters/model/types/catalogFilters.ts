import { BookmarksType, MangaStatusType, MangaTypeType } from '@packages/model/src/entities/manga';
import { DateValue } from '@packages/ui/src/shared/DatePicker';
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
    releaseDateFrom: DateValue | null;
    releaseDateTo: DateValue | null;
    setReleaseDateFrom: (releaseDateFrom: DateValue | null) => void;
    setReleaseDateTo: (releaseDateTo: DateValue | null) => void;
}
export interface MangaTypeSlice {
    type: MangaTypeType[];
    setType: (type: MangaTypeType[]) => void;
}
export interface MangaStatusSlice {
    status: MangaStatusType[];
    setStatus: (status: MangaStatusType[]) => void;
}
export interface BookmarksSlice {
    bookmarks: BookmarksType[];
    setBookmarks: (bookmarks: BookmarksType[]) => void;
}

export type TriSwitchState = 'include' | 'exclude' | 'none';

export interface GenresSlice {
    genres: number[];
    notGenres: number[];
    setGenres: (genres: number[]) => void;
    setNotGenres: (notGenres: number[]) => void;
}
export interface TagsSlice {
    tags: number[];
    notTags: number[];
    setTags: (tags: number[]) => void;
    setNotTags: (notTags: number[]) => void;
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
