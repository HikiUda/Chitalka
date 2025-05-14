import { memo } from 'react';
import { MangaCardInline } from '../MangaCardInline/MangaCardInline';
import cls from './ProgressReadMangaCardInline.module.scss';
import CrossoutSvg from '@/shared/assets/icon/common/crossout.svg';
import { CardBlock } from '@/shared/ui/CardBlock';
import { ProgressBar } from '@/shared/ui/ProgressBar';
import { classNames } from '@/shared/lib/helpers/classNames';
import { Button } from '@/shared/ui/Button';
import { Icon } from '@/shared/ui/Icon/Icon';
import { getRoute } from '@/shared/kernel/router/routerConfig';
import { MangaListItemContinueReadType } from '@/shared/api/deprecated/mangaList';
import { getUrlChapterId } from '@/entities/ChapterList';

interface ProgressReadMangaCardInlineProps {
    className?: string;
    manga: MangaListItemContinueReadType;
    onDelete?: (mangaId: number) => void;
    isDisabled?: boolean;
}

export const ProgressReadMangaCardInline = memo((props: ProgressReadMangaCardInlineProps) => {
    const { className, manga, onDelete, isDisabled } = props;
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
                to={
                    isDisabled
                        ? ''
                        : getRoute.readChapter(
                              manga.urlId,
                              getUrlChapterId(manga.tome, manga.chapter, manga.chapterId),
                          )
                }
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
