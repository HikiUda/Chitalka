import { memo } from 'react';

import { VStack } from '@packages/ui/src/shared/Stack';
import { Heading } from '@packages/ui/src/shared/Heading';
import { MangaTitle } from '@packages/model/src/api/manga/types/manga';
import { getStyleLineClamp } from '@packages/ui/src/shared/StyleHooks';

interface TitlesProps {
    className?: string;
    title: MangaTitle;
}

export const Titles = memo((props: TitlesProps) => {
    const { className, title } = props;
    return (
        <VStack className={className} max gap="4" align={'start'}>
            <Heading className={getStyleLineClamp()} bold HeadingTag="h2">
                {title.ru}
            </Heading>
            <Heading bold italic className={getStyleLineClamp({ lineClamp: '1' })} HeadingTag="h3">
                {title.en}
            </Heading>
        </VStack>
    );
});
