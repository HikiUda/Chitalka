import { createDevValidator } from '@packages/model/src/lib/zod/createDevValidator';

export const validateCategories = createDevValidator(() =>
    import('./categoriesScheme').then((r) => r.CategoriesResponseArrayData),
);
