import { createDevValidator } from '@/shared/lib/zod/createDevValidator';

export const validateCategories = createDevValidator(() =>
    import('./categoriesScheme').then((r) => r.CategoriesResponseArrayData),
);
