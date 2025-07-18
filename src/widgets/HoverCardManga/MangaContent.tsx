import { BookId } from '@/shared/kernel/book/book';
import {
    BookBasicInfo,
    CategoryCollapsedList,
    useGetManga,
    useMangaBasicInfo,
    useMangaCategories,
} from '@/entities/BookInfo';
import { Heading } from '@/shared/ui/kit/heading';
import { TextDisclosure } from '@/shared/ui/kit/text-disclosure';
import { MangaBookmarkSelector } from '@/features/BookToBookmarks';

interface MangaContentProps {
    mangaId: BookId;
}

export const MangaContent = (props: MangaContentProps) => {
    const { mangaId } = props;

    const { manga } = useGetManga(mangaId);
    const { categories } = useMangaCategories(manga);
    const { basicInfo } = useMangaBasicInfo(manga);

    return (
        <>
            <Heading className="px-4" variant="h3" weigth="semibold">
                {manga.title.main}
            </Heading>
            <Heading className="px-4" variant="h4" italic>
                {manga.title.en || manga.title.origin}
            </Heading>
            <BookBasicInfo className="w-full" basicInfo={basicInfo} />
            <TextDisclosure className="px-4" text={manga.description} />
            <CategoryCollapsedList className="mx-4" categories={categories} />
            <MangaBookmarkSelector className="mx-4" mangaId={mangaId} />
        </>
    );
};
