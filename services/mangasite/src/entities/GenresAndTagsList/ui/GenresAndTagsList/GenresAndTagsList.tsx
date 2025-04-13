import { FC, ReactNode, useMemo, useState } from 'react';
import { HStack } from '@packages/ui/src/shared/Stack';
import { AppLink } from '@packages/ui/src/shared/AppLink';
import { Tag } from '@packages/ui/src/shared/Tag';
import { Button } from '@packages/ui/src/shared/Button';
import { MangaCategoriesType } from '@/shared/api/individualManga';

interface GenresAndTagsListProps {
    className?: string;
    genres: MangaCategoriesType[];
    tags: MangaCategoriesType[];
    visibleCount?: number;
}

export const GenresAndTagsList: FC<GenresAndTagsListProps> = (props) => {
    const { className, genres = [], tags = [], visibleCount = 3 } = props;
    const [close, setClose] = useState(true);
    //TODO link to cotolog
    const allTags = useMemo(() => {
        let arr: ReactNode[] = [];
        arr = arr.concat(
            genres.map((janre, ind) => (
                <AppLink key={ind} to={''}>
                    <Tag text={janre.title} withHash={false} />
                </AppLink>
            )),
        );
        arr = arr.concat(
            tags.map((tag, ind) => (
                <AppLink key={ind + 1000} to={''}>
                    <Tag text={tag.title} />
                </AppLink>
            )),
        );
        return arr;
    }, [genres, tags]);

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
                        <Tag text={'+еще ' + (allTags.length - visibleCount)} withHash={false} />
                    </Button>
                ) : (
                    <Button theme="clear" color="none" noHover onPress={() => setClose(true)}>
                        <Tag text="...свернуть" withHash={false} />
                    </Button>
                ))}
        </HStack>
    );
};
