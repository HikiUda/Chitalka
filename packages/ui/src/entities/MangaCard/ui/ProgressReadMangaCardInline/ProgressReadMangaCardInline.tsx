import { memo } from 'react';
import { CardBlock } from '@ui/shared/CardBlock';
import { ProgressBar } from '@ui/shared/ProgressBar';
import { classNames } from '@packages/model/src/lib/classNames';
import { Button } from '@ui/shared/Button';
import CrossoutSvg from '@ui/assets/icon/common/crossout.svg';
import { Icon } from '@ui/shared/Icon/Icon';
import { getMangaSiteRoute } from '@packages/model/src/config/router/mangaSiteRouter';
import { MangaCardInline } from '../MangaCardInline/MangaCardInline';
import { MangaListItemContinueReadType } from '../../model/types/mangaListItemContinueRead';
import cls from './ProgressReadMangaCardInline.module.scss';

interface ProgressReadMangaCardInlineProps {
    className?: string;
    manga: MangaListItemContinueReadType;
    onDelete?: (mangaId: number) => void;
}

export const ProgressReadMangaCardInline = memo((props: ProgressReadMangaCardInlineProps) => {
    const { className, manga, onDelete } = props;
    //TODO link
    return (
        <CardBlock
            className={classNames(cls.ProgressReadMangaCardInline, {}, [className])}
            backgroundColor="bg"
        >
            <MangaCardInline
                img={manga.cover}
                title={manga.title}
                to={getMangaSiteRoute.manga(manga.urlId)}
                className={cls.card}
            >
                <ProgressBar
                    className={cls.bar}
                    value={manga.readedChapters}
                    maxValue={manga.chapterCount}
                    label={`${manga.tome} том ${manga.chapter} глава`}
                    valueLabel={`${manga.readedChapters} из ${manga.chapterCount}`}
                />
            </MangaCardInline>
            <Button
                onPress={() => onDelete?.(manga.id)}
                className={cls.deleteBtn}
                theme="fill"
                color="block"
                noHover
            >
                <Icon width={12} height={12} Svg={CrossoutSvg} />
            </Button>
        </CardBlock>
    );
});
