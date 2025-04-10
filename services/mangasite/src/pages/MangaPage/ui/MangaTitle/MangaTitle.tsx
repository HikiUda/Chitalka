import { memo } from 'react';
import { classNames } from '@packages/model/src/lib/helpers/classNames';
import { HStack } from '@packages/ui/src/shared/Stack';
import { MangaType } from '@packages/model/src/api/manga/types/manga';
import cls from './MangaTitle.module.scss';
import { Titles } from './Titles';
import { Rate } from './Rate';

interface MangaTitleProps {
    className?: string;
    manga?: MangaType;
    isLoading?: boolean;
}

export const MangaTitle = memo((props: MangaTitleProps) => {
    const { className, manga, isLoading } = props;

    //TODO long
    return (
        <div className={classNames(cls.MangaTitle, {}, [className])}>
            <HStack gap="32" max align="end">
                <Titles title={manga?.title} isLoading={isLoading} />
                <Rate rate={manga?.rate} countRate={manga?.countRate} isLoading={isLoading} />
            </HStack>
        </div>
    );
});
