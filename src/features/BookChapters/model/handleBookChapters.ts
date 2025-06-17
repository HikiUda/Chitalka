import { parseISO } from 'date-fns';

type Data<T> =
    | {
          prevPage: number | null;
          nextPage: number | null;
          data: T[];
      }
    | undefined;

export const handleBookChapters = <T extends { createdAt: string }>(
    data: Data<T>,
): Data<Omit<T, 'createAt'> & { createdAt: Date }> => {
    return (
        data && {
            ...data,
            data: data.data.map((chapter) => ({
                ...chapter,
                createdAt: parseISO(chapter.createdAt),
            })),
        }
    );
};
