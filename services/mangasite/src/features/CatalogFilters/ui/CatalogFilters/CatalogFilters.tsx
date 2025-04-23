import { FC, useState } from 'react';
import { classNames } from '@packages/model/src/lib/helpers/classNames';
import { CommonFilters } from '../CommonFilters/CommonFilters';
import { GenresList } from '../CategoriesList/GenresList/GenresList';
import { TagsList } from '../CategoriesList/TagsList/TagsList';
import cls from './CatalogFilters.module.scss';

interface CatalogFiltersProps {
    className?: string;
    onApply?: () => void;
}

const CatalogFilters: FC<CatalogFiltersProps> = (props) => {
    const { className, onApply } = props;
    const [tagsOpen, setTagsOpen] = useState(false);
    const [genresOpen, setGenresOpen] = useState(false);

    return (
        <div className={classNames(cls.CatalogFilters, {}, [className])}>
            {!tagsOpen && !genresOpen && (
                <CommonFilters
                    onApply={onApply}
                    className={classNames(cls.common, {}, [cls.fadeOut])}
                    showGenres={() => setGenresOpen(true)}
                    showTags={() => setTagsOpen(true)}
                />
            )}
            {genresOpen && (
                <GenresList
                    onApply={onApply}
                    className={cls.fadeInUp}
                    onBack={() => setGenresOpen(false)}
                />
            )}
            {tagsOpen && (
                <TagsList
                    onApply={onApply}
                    className={cls.fadeInUp}
                    onBack={() => setTagsOpen(false)}
                />
            )}
        </div>
    );
};
export default CatalogFilters;
