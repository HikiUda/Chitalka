import { FC } from 'react';
import { HStack } from '@packages/ui/src/shared/Stack';
import { MangaGenresAndTagType } from '@packages/model/src/api/manga/types/manga';

import { RenderTagsAndGenres } from '../RenderTagsAndJGenres/RenderTagsAndJanres';

interface GenresAndTagsListProps {
    className?: string;
    genres: MangaGenresAndTagType[];
    tags: MangaGenresAndTagType[];
}

export const GenresAndTagsList: FC<GenresAndTagsListProps> = (props) => {
    const { className, genres = [], tags = [] } = props;

    return (
        <HStack wrap="wrap" justify="start" className={className}>
            <RenderTagsAndGenres genres={genres || []} tags={tags || []} />
        </HStack>
    );
};
