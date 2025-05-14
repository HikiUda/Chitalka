import { FC, ReactNode, useMemo, useState } from 'react';
import { HStack } from '@/shared/ui/Stack';
import { AppLink } from '@/shared/ui/AppLink';
import { Tag } from '@/shared/ui/Tag';
import { Button } from '@/shared/ui/Button';
import { getRoute } from '@/shared/kernel/router';
import { MangaCategoriesType } from '@/shared/api/deprecated/individualManga';

interface GenresAndTagsListProps {
    className?: string;
    genres: MangaCategoriesType[];
    tags: MangaCategoriesType[];
    visibleCount?: number;
    mini?: boolean;
}

export const GenresAndTagsList: FC<GenresAndTagsListProps> = (props) => {
    const { className, genres = [], tags = [], visibleCount = 3, mini } = props;
    const [close, setClose] = useState(true);
    const allTags = useMemo(() => {
        let arr: ReactNode[] = [];
        arr = arr.concat(
            genres.map((genre, ind) => (
                <AppLink key={ind} to={`${getRoute.catalog()}?genres=${genre.id}`}>
                    <Tag mini={mini} text={genre.title} withHash={false} />
                </AppLink>
            )),
        );
        arr = arr.concat(
            tags.map((tag, ind) => (
                <AppLink key={ind + 1000} to={`${getRoute.catalog()}?tags=${tag.id}`}>
                    <Tag mini={mini} text={tag.title} />
                </AppLink>
            )),
        );
        return arr;
    }, [genres, tags, mini]);

    if (!allTags.length) return null;

    return (
        <HStack wrap="wrap" justify="start" className={className}>
            {allTags.map((tag, ind) => (!close || ind < visibleCount ? tag : null))}
            {allTags.length > visibleCount &&
                (close ? (
                    <Button
                        data-testid="GenresAndTagsList-OpenButton"
                        theme="clear"
                        color="none"
                        noHover
                        onPress={() => setClose(false)}
                    >
                        <Tag
                            mini={mini}
                            text={'+еще ' + (allTags.length - visibleCount)}
                            withHash={false}
                        />
                    </Button>
                ) : (
                    <Button theme="clear" color="none" noHover onPress={() => setClose(true)}>
                        <Tag mini={mini} text="...свернуть" withHash={false} />
                    </Button>
                ))}
        </HStack>
    );
};
