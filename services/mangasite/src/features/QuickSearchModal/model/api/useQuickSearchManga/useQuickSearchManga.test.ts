import { createQueryClient } from '@packages/model/src/config/queryClient/testing/createQueryClient';
import { renderHook, waitFor } from '@testing-library/react';

import { http, HttpResponse } from 'msw';
import { API_QUICKSEARCH, useQuickSearchManga } from './useQuickSearchManga';
import { server } from '@/../jest/setupTests';

describe('useQuickSearchManga', () => {
    it('getQuickSearchManga', async () => {
        server.use(
            http.get('*' + API_QUICKSEARCH, () => {
                return HttpResponse.json({ answer: 42 });
            }),
        );

        const { result } = renderHook(() => useQuickSearchManga(), {
            wrapper: createQueryClient(),
        });

        await waitFor(() => expect(result.current.isSuccess).toBe(true));
        expect(result.current.data).toEqual({ answer: 42 });
    });
});
