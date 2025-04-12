import { memo, ReactNode, useMemo, useState } from 'react';
import { MangaGenresAndTagType } from '@packages/model/src/api/manga/types/manga';
import { AppLink } from '@packages/ui/src/shared/AppLink';
import { Tag } from '@packages/ui/src/shared/Tag';
import { Button } from '@packages/ui/src/shared/Button';

interface RenderTagsAndGenresProps {
    genres: MangaGenresAndTagType[];
    tags: MangaGenresAndTagType[];
}

export const RenderTagsAndGenres = memo((props: RenderTagsAndGenresProps) => {
    const { genres, tags } = props;
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
        <>
            {allTags.map((tag, ind) => (!close || ind < 3 ? tag : null))}
            {allTags.length > 3 &&
                (close ? (
                    <Button theme="clear" color="none" noHover onPress={() => setClose(false)}>
                        <Tag text={'+еще ' + (allTags.length - 3)} withHash={false} />
                    </Button>
                ) : (
                    <Button theme="clear" color="none" noHover onPress={() => setClose(true)}>
                        <Tag text="...свернуть" withHash={false} />
                    </Button>
                ))}
        </>
    );
});
