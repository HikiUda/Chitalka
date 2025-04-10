import { GET_CONTINUE_READ_MANGA } from './useGetContinueReadManga';
import { mockGetMangaListItemRequest } from '@/entities/MangaCard';

export const mockUseGetContinueReadManga = mockGetMangaListItemRequest({
    subRoute: GET_CONTINUE_READ_MANGA,
});
