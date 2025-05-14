import { createZodDevValidator } from '@/shared/lib/helpers/createZodDevValidator';

export const validateCategories = createZodDevValidator(() =>
    import('./categoriesScheme').then((r) => r.CategoriesResponseArrayData),
);
