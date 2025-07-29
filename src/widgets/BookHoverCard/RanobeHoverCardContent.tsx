import { BookId } from '@/shared/kernel/book/book';
import {
    BookBasicInfo,
    CategoryCollapsedList,
    useGetRanobe,
    useRanobeBasicInfo,
    useRanobeCategories,
} from '@/entities/BookInfo';
import { Heading } from '@/shared/ui/kit/heading';
import { TextDisclosure } from '@/shared/ui/kit/text-disclosure';
import { RanobeBookmarkSelector } from '@/features/BookBookmarks';

type RanobeHoverCardContentProps = {
    ranobeId: BookId;
};

export const RanobeHoverCardContent = (props: RanobeHoverCardContentProps) => {
    const { ranobeId } = props;

    const { ranobe } = useGetRanobe(ranobeId);
    const { categories } = useRanobeCategories(ranobe);
    const { basicInfo } = useRanobeBasicInfo(ranobe);

    return (
        <>
            <Heading className="px-4" variant="h3" bold>
                {ranobe.title.main}
            </Heading>
            <Heading className="px-4" variant="h4" italic>
                {ranobe.title.en || ranobe.title.origin}
            </Heading>
            <BookBasicInfo className="w-full" basicInfo={basicInfo} />
            <TextDisclosure className="px-4" text={ranobe.description} />
            <CategoryCollapsedList className="mx-4" categories={categories} />
            <RanobeBookmarkSelector className="mx-4" ranobeId={ranobeId} />
        </>
    );
};
