import { memo } from 'react';

import { VStack } from '@packages/ui/src/shared/Stack';
import { Heading } from '@packages/ui/src/shared/Heading';
import Skeleton from 'react-loading-skeleton';
import { MangaTitle } from '@packages/model/src/api/manga/types/manga';
import { getStyleLineClamp } from '@packages/ui/src/shared/StyleHooks';

interface TitlesProps {
    className?: string;
    title?: MangaTitle;

    isLoading?: boolean;
}

export const Titles = memo((props: TitlesProps) => {
    const { className, title, isLoading } = props;
    return (
        <VStack className={className} max gap="4" align={isLoading ? 'stretch' : 'start'}>
            {isLoading ? (
                <>
                    <Skeleton width="85%" height={32} />
                    <Skeleton width="65%" height={24} />
                </>
            ) : (
                <>
                    <Heading className={getStyleLineClamp()} bold HeadingTag="h2">
                        {title?.ru}
                    </Heading>
                    <Heading
                        bold
                        italic
                        className={getStyleLineClamp({ lineClamp: '1' })}
                        HeadingTag="h3"
                    >
                        {title?.en}
                    </Heading>
                </>
            )}
        </VStack>
    );
});
