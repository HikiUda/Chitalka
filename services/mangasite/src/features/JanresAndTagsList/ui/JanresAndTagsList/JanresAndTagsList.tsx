import { FC, useMemo } from 'react';
import { classNames } from '@packages/model/src/lib/helpers/classNames';
import { HStack } from '@packages/ui/src/shared/Stack';
import { MangaJanresAndTagType } from '@packages/model/src/api/manga/types/manga';
import Skeleton from 'react-loading-skeleton';
import { RenderTagsAndJanres } from '../RenderTagsAndJanres/RenderTagsAndJanres';
import cls from './JanresAndTagsList.module.scss';

interface JanresAndTagsListProps {
    className?: string;
    janres?: MangaJanresAndTagType[];
    tags?: MangaJanresAndTagType[];
    isLoading?: boolean;
}

export const JanresAndTagsList: FC<JanresAndTagsListProps> = (props) => {
    const { className, janres, tags, isLoading } = props;

    const skeletons = useMemo(() => {
        return Array(8)
            .fill(0)
            .map((sk, ind) => <Skeleton key={ind} width={75} height={35} />);
    }, []);

    return (
        <HStack
            wrap="wrap"
            justify="start"
            className={classNames(cls.JanresAndTagsList, {}, [className])}
        >
            {isLoading ? (
                skeletons.map((sk) => sk)
            ) : (
                <RenderTagsAndJanres janres={janres || []} tags={tags || []} />
            )}
        </HStack>
    );
};
