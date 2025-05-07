import { SearchSlice } from './slices/searchSlice';
import { SortByOrderSlice } from './slices/sortByOrderSlice';
import { ChapterCountSlice } from './slices/chapterCountSlice';
import { RateCountSlice } from './slices/rateCountSlice';
import { RateSlice } from './slices/rateSlice';
import { AgeRateSlice } from './slices/ageRateSlice';
import { ReleaseDateSlice } from './slices/releaseDateSlice';
import { MangaTypeSlice } from './slices/mangaTypeSlice';
import { MangaStatusSlice } from './slices/mangaStatusSlice';
import { BookmarksSlice } from './slices/bookmarksSlice';
import { GenresSlice } from './slices/genresSlice';
import { TagsSlice } from './slices/tagsSlice';
import { GlobalSlice } from './slices/globalSlice';

export type TriSwitchState = 'include' | 'exclude' | 'none';

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
    TagsSlice &
    GlobalSlice;
