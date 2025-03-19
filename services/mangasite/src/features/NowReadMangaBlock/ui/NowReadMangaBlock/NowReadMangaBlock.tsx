import { FC } from 'react';
import { classNames } from '@packages/model/src/lib/classNames';
import { CardBlock } from '@packages/ui/src/shared/CardBlock';
import { SelectTimeRange } from '@packages/ui/src/entities/SelectTimeRange';
import { Heading } from '@packages/ui/src/shared/Heading';
import { ColumePrimaryMangaCardInline } from '@packages/ui/src/entities/MangaList';
import { HStack } from '@packages/ui/src/shared/Stack';
import cls from './NowReadMangaBlock.module.scss';

interface NowReadMangaBlockProps {
    className?: string;
}

export const NowReadMangaBlock: FC<NowReadMangaBlockProps> = (props) => {
    const { className } = props;

    return (
        <CardBlock className={classNames(cls.NowReadMangaBlock, {}, [className])}>
            <HStack justify="between" className={cls.title}>
                <Heading HeaderTag="h2" color="primary">
                    Сейчас читают
                </Heading>
                <SelectTimeRange />
            </HStack>
            <div className={cls.scroll}>
                <HStack gap="16" justify="between">
                    <ColumePrimaryMangaCardInline
                        className={cls.card}
                        title="Title"
                        mangaList={[1, 2, 3]}
                    />
                    <ColumePrimaryMangaCardInline
                        className={cls.card}
                        title="Title"
                        mangaList={[1, 2, 3]}
                    />
                    <ColumePrimaryMangaCardInline
                        className={cls.card}
                        title="Title"
                        mangaList={[1, 2, 3]}
                    />
                </HStack>
            </div>
        </CardBlock>
    );
};
