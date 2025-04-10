import { mockGetMangaListItemRequest } from '../../mocks/mangaListItem';
import { GET_LAST_UPDATED_MANGA } from './useGetLastUpdatedMangas';

export const mockUseGetLastUpdatedMangas = mockGetMangaListItemRequest({
    withPagination: true,
    subRoute: GET_LAST_UPDATED_MANGA,
});
