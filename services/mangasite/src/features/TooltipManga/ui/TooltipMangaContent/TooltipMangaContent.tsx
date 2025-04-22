import { FC } from 'react';
import { classNames } from '@packages/model/src/lib/helpers/classNames';
import { CardBlock } from '@packages/ui/src/shared/CardBlock';
import { Heading } from '@packages/ui/src/shared/Heading';
import { useQuery } from '@tanstack/react-query';
import { MangaIdType } from '@packages/model/src/entities/manga';
import { TextDisclosure } from '@packages/ui/src/shared/TextDisclosure';
import { getFlex } from '@packages/ui/src/shared/Stack';
import cls from './TooltipMangaContent.module.scss';
import { MangaApi } from '@/shared/api/individualManga';
import { GenresAndTagsList } from '@/entities/GenresAndTagsList';
import { AddMangaToBookmarks } from '@/features/AddMangaToBookmarks';

interface TooltipMangaContentProps {
    className?: string;
    mangaId: MangaIdType;
}

const TooltipMangaContent: FC<TooltipMangaContentProps> = (props) => {
    const { className, mangaId } = props;

    const { data, isLoading } = useQuery(MangaApi.getMangaQueryOptions(mangaId));
    if (!data) return 'no Manga';
    return (
        <CardBlock
            className={classNames(cls.TooltipMangaContent, {}, [
                className,
                getFlex({ direction: 'column', align: 'start' }),
            ])}
        >
            <Heading HeadingTag="h4" bold>
                {data.title.ru}
            </Heading>
            <Heading HeadingTag="h5" italic>
                {data.title.en}
            </Heading>
            <TextDisclosure text={data.description} />
            <GenresAndTagsList genres={data.genres} tags={data.tags} />
            <AddMangaToBookmarks mangaId={mangaId} />
        </CardBlock>
    );
};
export default TooltipMangaContent;
