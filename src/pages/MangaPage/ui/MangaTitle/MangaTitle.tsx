import { memo } from 'react';
import { classNames } from '@/shared/lib/helpers/classNames';
import { getFlex, VStack } from '@/shared/deprecate-ui/Stack';
import { Heading } from '@/shared/deprecate-ui/Heading';
import { getStyleLineClamp } from '@/shared/deprecate-ui/StyleHooks';
import { isMobile } from 'react-device-detect';
import cls from './MangaTitle.module.scss';
import { Rate } from './Rate';
import { Info } from './Info';
import { MangaType } from '@/shared/api/deprecated/individualManga';

interface MangaTitleProps {
    className?: string;
    manga: MangaType;
}

export const MangaTitle = memo((props: MangaTitleProps) => {
    const { className, manga } = props;

    //TODO long
    return (
        <div
            className={classNames(cls.MangaTitle, {}, [
                className,
                getFlex(
                    isMobile
                        ? { direction: 'columnReverse' }
                        : { gap: '32', max: true, align: 'end' },
                ),
            ])}
        >
            <Info manga={manga}>
                <VStack className={className} max gap="4" align={'start'}>
                    <Heading
                        className={getStyleLineClamp({ wordBreak: true, huphens: true })}
                        bold
                        HeadingTag="h2"
                    >
                        {manga.title.ru}
                    </Heading>

                    <Heading
                        bold
                        italic
                        className={getStyleLineClamp({
                            lineClamp: '1',
                            wordBreak: true,
                            huphens: true,
                        })}
                        HeadingTag="h3"
                    >
                        {manga.title.en}
                    </Heading>
                </VStack>
            </Info>

            <Rate rate={manga.rate} countRate={manga.countRate} mangaId={manga.id} />
        </div>
    );
});
