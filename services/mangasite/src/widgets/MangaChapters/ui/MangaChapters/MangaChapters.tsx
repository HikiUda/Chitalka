import { FC, useCallback, useMemo, useState } from 'react';
import { classNames } from '@packages/model/src/lib/classNames';
import { getFlex } from '@packages/ui/src/shared/Stack';
import { MangaChaptersNavbar } from '../MangaChaptersNavbar/MangaChaptersNavbar';
import { ChapterLine } from '../ChapterLine/ChapterLine';
import cls from './MangaChapters.module.scss';

interface MangaChaptersProps {
    className?: string;
}

const MangaChapters: FC<MangaChaptersProps> = (props) => {
    const { className } = props;
    const [order, setOrder] = useState(false);

    const changeOrder = useCallback(() => {
        setOrder((prev) => !prev);
    }, []);

    const chapters = useMemo(() => {
        return Array(100)
            .fill(0)
            .map((chapter, ind) => <ChapterLine id={'chapter' + (ind + 1)} key={ind} />);
    }, []);

    return (
        <div className={classNames(cls.MangaChapters, {}, [className])}>
            <MangaChaptersNavbar changeOrder={changeOrder} />

            <div className={getFlex({ direction: order ? 'columnReverse' : 'column' })}>
                {chapters.map((chapter) => chapter)}
            </div>
        </div>
    );
};
export default MangaChapters;
