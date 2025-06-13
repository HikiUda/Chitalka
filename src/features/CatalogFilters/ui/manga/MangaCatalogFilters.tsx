import { CatalogFiltersLayout } from '../layout/CatalogFiltersLayout';
import { GenresFilters } from './GenresFilters';
import { CommonFilters } from './CommonFilters';
import { TagsFilters } from './TagsFilters';

interface MangaCatalogFiltersProps {
    className?: string;
}

export const MangaCatalogFilters = (props: MangaCatalogFiltersProps) => {
    const { className } = props;

    return (
        <CatalogFiltersLayout
            className={className}
            common={(toGenres, toTags) => <CommonFilters toGenres={toGenres} toTags={toTags} />}
            genres={(onBack) => <GenresFilters onBack={onBack} />}
            tags={(onBack) => <TagsFilters onBack={onBack} />}
        />
    );
};
