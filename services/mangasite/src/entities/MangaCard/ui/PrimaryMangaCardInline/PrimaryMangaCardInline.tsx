import { memo } from 'react';
import { classNames } from '@packages/model/src/lib/helpers/classNames';
import { MangaCardInline } from '../MangaCardInline/MangaCardInline';

interface PrimaryMangaCardInlineProps {
    className?: string;
}

export const PrimaryMangaCardInline = memo((props: PrimaryMangaCardInlineProps) => {
    const { className } = props;

    return (
        <MangaCardInline
            className={classNames('', {}, [className])}
            title="This is big Title for check style sdfadfasf"
            subtitle="Manga"
            to="/mangasite"
        />
    );
});
