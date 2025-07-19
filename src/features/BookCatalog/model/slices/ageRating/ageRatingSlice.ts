import { CatalogFilterInitialState, CatalogFilterSlice } from '../../types';
import { AgeRating } from '@/shared/kernel/book/ageRating';

export type AgeRatingSlice = {
    ageRating: AgeRating[];
    setAgeRating: (ageRateTo: AgeRating[]) => void;
};

export const ageRatingSliceInitialState: CatalogFilterInitialState<AgeRatingSlice> = {
    ageRating: [],
};

export const createAgeRatingSlice: CatalogFilterSlice<AgeRatingSlice> = (storeName) => (set) => ({
    ...ageRatingSliceInitialState,
    setAgeRating: (ageRating) =>
        set(
            () => ({
                ageRating,
            }),
            false,
            `${storeName}/setAgeRating`,
        ),
});
