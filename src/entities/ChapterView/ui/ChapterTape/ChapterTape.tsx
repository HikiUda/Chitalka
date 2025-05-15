import { FC } from 'react';
import { ChapterPagesType } from '../../model/types/chapterPage.scheme';
import { ChapterPageContainer } from '../ChapterPageContainer/ChapterPageContainer';
import cls from './ChapterTape.module.scss';
import { classNames } from '@/shared/lib/helpers/classNames';
import { AppImage } from '@/shared/deprecate-ui/AppImage';

import Image from '@/shared/assets/image/forError/mangaErrorImageFallback.jpg';

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
