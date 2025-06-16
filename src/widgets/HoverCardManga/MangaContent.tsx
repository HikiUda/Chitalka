import { MangaIdType } from '@/shared/kernel/manga';
import {
    BookBasicInfo,
    CategoryCollapsedList,
    useBookBasicInfo,
    useBookTitles,
    useCategoriesList,
    useGetManga,
} from '@/entities/BookInfo';
import { Heading } from '@/shared/ui/kit/heading';
import { TextDisclosure } from '@/shared/ui/kit/text-disclosure';
import { AddMangaToBookmarks } from '@/features/AddMangaToBookmarks';

interface MangaContentProps {
    mangaId: MangaIdType;
}

export const MangaContent = (props: MangaContentProps) => {
    const { mangaId } = props;

    const { manga } = useGetManga(mangaId);
    const { categories } = useCategoriesList(manga.genres, manga.tags);
    const mangaTitles = useBookTitles(manga);
    const { basicInfo } = useBookBasicInfo(manga);

    return (
        <>
            <Heading className="px-4" variant="h3" weigth="semibold">
                {mangaTitles.main}
            </Heading>
            <Heading className="px-4" variant="h4" italic>
                {mangaTitles.subtitle}
            </Heading>
            <BookBasicInfo className="w-full" basicInfo={basicInfo} />
            <TextDisclosure className="px-4" text={manga.description} />
            <CategoryCollapsedList className="mx-4" categories={categories} />
            <AddMangaToBookmarks className="mx-4" mangaId={mangaId} />
        </>
    );
};
