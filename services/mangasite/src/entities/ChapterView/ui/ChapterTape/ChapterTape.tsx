import { FC } from 'react';
import { classNames } from '@packages/model/src/lib/helpers/classNames';
import { AppImage } from '@packages/ui/src/shared/AppImage';

import Image from '@packages/ui/src/assets/image/forError/mangaErrorImageFallback.jpg';
import { ChapterPagesType } from '../../model/types/chapterPage.scheme';
import { ChapterPageContainer } from '../ChapterPageContainer/ChapterPageContainer';
import cls from './ChapterTape.module.scss';

interface ChapterTapeProps {
    className?: string;
    data: ChapterPagesType;
}

export const ChapterTape: FC<ChapterTapeProps> = (props) => {
    const { className, data } = props;

    return (
        <ChapterPageContainer
            maxWidth={data.containerMaxWidth}
            className={classNames(cls.ChapterTape, {}, [className])}
        >
            {data.pages.map((page) => (
                <AppImage key={page.src} src={page.src} errorFallback={<AppImage src={Image} />} />
            ))}
        </ChapterPageContainer>
    );
};
