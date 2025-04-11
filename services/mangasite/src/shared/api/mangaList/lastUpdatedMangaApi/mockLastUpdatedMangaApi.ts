import { createMockMangaListItemRequest } from '../mocks/mangaListItem';

export const mockLastUpdatedMangaApi = createMockMangaListItemRequest({
    subRoute: 'last-updated',
    withPagination: true,
});
