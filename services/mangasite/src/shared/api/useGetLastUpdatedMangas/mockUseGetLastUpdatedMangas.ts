import { mockGetMangaListItemRequest } from '@packages/ui/src/entities/MangaCard/testing';

export const mockUseGetLastUpdatedMangas = mockGetMangaListItemRequest({
    withPagination: true,
    subRoute: 'last-updated-mangas',
});
