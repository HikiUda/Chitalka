import { FC, ReactNode, useMemo, useState } from 'react';
import { classNames } from '@packages/model/src/lib/classNames';
import { Tag } from '@packages/ui/src/shared/Tag';
import { HStack } from '@packages/ui/src/shared/Stack';
import { AppLink } from '@packages/ui/src/shared/AppLink';
import { Button } from '@packages/ui/src/shared/Button';
import cls from './JanresAndTagsList.module.scss';

interface JanresAndTagsListProps {
    className?: string;
}

const janres = [
    { id: 1, title: 'Janre1' },
    { id: 2, title: 'Janre2' },
    { id: 3, title: 'Janre3' },
];
const tags = [
    { id: 1, title: 'Tag1' },
    { id: 2, title: 'Tag2' },
    { id: 3, title: 'Tag3' },
    { id: 4, title: 'Tag4' },
    { id: 5, title: 'Tag5' },
];

export const JanresAndTagsList: FC<JanresAndTagsListProps> = (props) => {
    const { className } = props;
    const [close, setClose] = useState(true);

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
    }, []);

    return (
        <HStack
            wrap="wrap"
            justify="start"
            className={classNames(cls.JanresAndTagsList, {}, [className])}
        >
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
        </HStack>
    );
};
