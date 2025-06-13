import { z } from 'zod';
import { NumberArrayField, NumberArrayFieldUrl } from '../../filtersSchemas';

export const genresSchema = z.object({
    genres: NumberArrayField,
    notGenres: NumberArrayField,
});
export const genresSchemaUrl = z.object({
    genres: NumberArrayFieldUrl,
    notGenres: NumberArrayFieldUrl,
});
