import { z } from 'zod';
import { NumberArrayField } from '../../filtersSchemas';

export const genresSchema = z.object({
    genres: NumberArrayField,
    notGenres: NumberArrayField,
});
