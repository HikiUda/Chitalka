import { mockGetMangaListItemRequest } from '../../mocks/mangaListItem';

export const mockUseGetLastUpdatedMangas = mockGetMangaListItemRequest({
    withPagination: true,
    subRoute: 'last-updated-mangas',
});
