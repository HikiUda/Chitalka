import { QueryClient } from '@tanstack/react-query';
import { z } from 'zod';

//TODO set styleTime more
export const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            throwOnError(error) {
                if (error instanceof z.ZodError) return true;
                return false;
            },
        },
        mutations: {
            throwOnError(error) {
                if (error instanceof z.ZodError) return true;
                return false;
            },
        },
    },
});
