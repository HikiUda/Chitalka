import { FC } from 'react';
import { useQuery } from '@tanstack/react-query';
import Skeleton from 'react-loading-skeleton';
import { AdditionalInfoBlock } from '../AdditionalInfoBlock/AdditionalInfoBlock';
import cls from './HoverCardMangaContent.module.scss';
import { classNames } from '@/shared/lib/helpers/classNames';
import { CardBlock } from '@/shared/deprecate-ui/CardBlock';
import { Heading } from '@/shared/deprecate-ui/Heading';
import { MangaIdType } from '@/shared/kernel/manga';
import { TextDisclosure } from '@/shared/deprecate-ui/TextDisclosure';
import { getFlex, HStack } from '@/shared/deprecate-ui/Stack';
import { MangaApi } from '@/shared/api/deprecated/individualManga';
import { GenresAndTagsList } from '@/entities/GenresAndTagsList';
import { AddMangaToBookmarks } from '@/features/AddMangaToBookmarks';

interface HoverCardMangaContentProps {
    className?: string;
    mangaId: MangaIdType;
}

const HoverCardMangaContent: FC<HoverCardMangaContentProps> = (props) => {
    const { className, mangaId } = props;

    const { data, isLoading } = useQuery(MangaApi.getMangaQueryOptions(mangaId));

    //TODO  error
    if (isLoading)
        return (
            <CardBlock>
                <Skeleton style={{ marginLeft: 15, marginBottom: 15 }} width={300} />
                <Skeleton style={{ marginLeft: 15, marginBottom: 15 }} width={150} />
                <Skeleton height={70} style={{ marginBottom: 15 }} />
                <Skeleton
                    style={{ marginLeft: 15, marginBottom: 15, marginRight: 15 }}
                    width={450}
                    count={4}
                />
                <HStack
                    justify="start"
                    style={{ marginBottom: 15 }}
                    wrap="wrap"
                    className={cls.padding}
                >
                    <Skeleton width={40} />
                    <Skeleton width={80} />
                    <Skeleton width={40} />
                    <Skeleton width={40} />
                    <Skeleton width={40} />
                    <Skeleton width={60} />
                    <Skeleton width={80} />
                    <Skeleton width={40} />
                    <Skeleton width={80} />
                    <Skeleton width={40} />
                    <Skeleton width={40} />
                    <Skeleton width={40} />
                    <Skeleton width={60} />
                    <Skeleton width={80} />
                </HStack>
                <Skeleton style={{ marginLeft: 15 }} width={150} height={20} />
            </CardBlock>
        );
    if (!data) return 'no Manga';
    return (
        <CardBlock
            className={classNames(cls.TooltipMangaContent, {}, [
                className,
                getFlex({ direction: 'column', align: 'start' }),
            ])}
        >
            <Heading className={cls.padding} HeadingTag="h4" bold>
                {data.title.ru}
            </Heading>
            <Heading className={cls.padding} HeadingTag="h5" italic>
                {data.title.en}
            </Heading>
            <HStack className={cls.additional} justify="around" max>
                <AdditionalInfoBlock title="Статус" content={data.status} />
                <AdditionalInfoBlock
                    title="Выпуск"
                    content={data.releaseDate?.getFullYear() || 'Не указано'}
                />
                <AdditionalInfoBlock title="Глав" content={data.chaptersCount} />
            </HStack>
            <TextDisclosure className={cls.padding} text={data.description} />
            <GenresAndTagsList className={cls.padding} mini genres={data.genres} tags={data.tags} />
            <div className={cls.padding}>
                <AddMangaToBookmarks mangaId={mangaId} />
            </div>
        </CardBlock>
    );
};
export default HoverCardMangaContent;
