import { FC } from 'react';
import { classNames } from '@packages/model/src/lib/helpers/classNames';
import { useParams } from 'react-router-dom';
import cls from './ReadChapterPage.module.scss';

interface ReadChapterPageProps {
    className?: string;
}

const ReadChapterPage: FC<ReadChapterPageProps> = (props) => {
    const { className } = props;
    const { mangaId, chapterId } = useParams();

    return <div className={classNames(cls.ReadChapterPage, {}, [className])}>readChapter Lol</div>;
};

export default ReadChapterPage;
