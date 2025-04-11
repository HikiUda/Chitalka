import { memo } from 'react';
import { CardBlock } from '@packages/ui/src/shared/CardBlock';
import { ProgressBar } from '@packages/ui/src/shared/ProgressBar';
import { classNames } from '@packages/model/src/lib/helpers/classNames';
import { Button } from '@packages/ui/src/shared/Button';
import CrossoutSvg from '@ui/assets/icon/common/crossout.svg';
import { Icon } from '@packages/ui/src/shared/Icon/Icon';
import { getMangaSiteRoute } from '@packages/model/src/config/router/mangaSiteRouter';
import { MangaCardInline } from '../MangaCardInline/MangaCardInline';
import cls from './ProgressReadMangaCardInline.module.scss';
import { MangaListItemContinueReadType } from '@/shared/api/mangaList';

interface ProgressReadMangaCardInlineProps {
    className?: string;
    manga: MangaListItemContinueReadType;
    onDelete?: (mangaId: number) => void;
    isDisabled?: boolean;
}

export const ProgressReadMangaCardInline = memo((props: ProgressReadMangaCardInlineProps) => {
    const { className, manga, onDelete, isDisabled } = props;
    //TODO link
    return (
        <CardBlock
            className={classNames(
                cls.ProgressReadMangaCardInline,
                { [cls.cardDisabled]: isDisabled },
                [className],
            )}
            backgroundColor="bg"
        >
            <MangaCardInline
                img={manga.cover}
                title={manga.title}
                to={isDisabled ? '' : getMangaSiteRoute.manga(manga.urlId)}
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
            {onDelete && (
                <Button
                    onPress={() => onDelete?.(manga.id)}
                    className={cls.deleteBtn}
                    theme="fill"
                    color="none"
                    noHover
                    isDisabled={isDisabled}
                >
                    <Icon width={12} height={12} Svg={CrossoutSvg} />
                </Button>
            )}
        </CardBlock>
    );
});
