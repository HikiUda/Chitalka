export { $apiManga } from './base';
export type { MangaListItemStatisticType } from './scheme/mangaListItemStatistic';
export type { MangaListItemContinueReadType } from './scheme/mangaListItemContinueRead';
export type { MangaListItemLastUpdatedType } from './scheme/mangaListItemLastUpdated';
export {
    getArrayMangaListItme,
    mangaListItem,
    createMockMangaListItemRequest,
} from './mocks/mangaListItem';

export { validateMangaListItemStatisticResponseArrayData } from './validate/statisticResponseArrayData';
export { validateMangaListItemContinueReadResponseArrayData } from './validate/continueReadResponseArrayData';
export { LastUpdatedMangaApi } from './lastUpdatedMangaApi/lastUpdatedMangaApi';
