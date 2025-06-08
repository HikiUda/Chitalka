// import { GenresFilters } from './Categories/GenresFilters';
// import { CommonFilters } from './CommonFilters';

import { TagsFilters } from './Categories/TagsFilters';

interface CatalogFiltersProps {
    className?: string;
}

export const CatalogFilters = (props: CatalogFiltersProps) => {
    const { className } = props;

    return (
        <div className={className}>
            {/* <CommonFilters /> */}
            {/* <GenresFilters /> */}
            <TagsFilters />
        </div>
    );
};
