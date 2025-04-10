import { memo, ReactNode, useMemo, useState } from 'react';
import { MangaJanresAndTagType } from '@packages/model/src/api/manga/types/manga';
import { AppLink } from '@packages/ui/src/shared/AppLink';
import { Tag } from '@packages/ui/src/shared/Tag';
import { Button } from '@packages/ui/src/shared/Button';

interface RenderTagsAndJanresProps {
    className?: string;
    janres: MangaJanresAndTagType[];
    tags: MangaJanresAndTagType[];
}

export const RenderTagsAndJanres = memo((props: RenderTagsAndJanresProps) => {
    const { className, janres, tags } = props;
    const [close, setClose] = useState(true);
    //TODO link to cotolog
    const allTags = useMemo(() => {
        let arr: ReactNode[] = [];
        arr = arr.concat(
            janres.map((janre, ind) => (
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
    }, [janres, tags]);

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
