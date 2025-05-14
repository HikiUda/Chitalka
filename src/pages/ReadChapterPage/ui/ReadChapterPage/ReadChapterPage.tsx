import { FC } from 'react';
import { useParams } from 'react-router-dom';
import cls from './ReadChapterPage.module.scss';
import { classNames } from '@/shared/lib/helpers/classNames';
import { Page } from '@/shared/layout/Page';
import { ChapterSelectView } from '@/features/MangaChapters';

interface ReadChapterPageProps {
    className?: string;
}

const ReadChapterPage: FC<ReadChapterPageProps> = (props) => {
    const { className } = props;
    const { mangaId, chapterId } = useParams();

    //TODO handle have no id
    if (!mangaId || !chapterId) return null;

    return (
        <Page className={classNames(cls.ReadChapterPage, {}, [className])}>
            <ChapterSelectView mangaId={mangaId} chapterId={chapterId} />
            {/* <div style={{ height: 5000, backgroundColor: '#fc5' }} /> */}
        </Page>
    );
};

export default ReadChapterPage;
