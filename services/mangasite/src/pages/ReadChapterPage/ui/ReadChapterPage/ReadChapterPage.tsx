import { FC } from 'react';
import { classNames } from '@packages/model/src/lib/helpers/classNames';
import { useParams } from 'react-router-dom';
import { Page } from '@packages/ui/src/shared/Page';
import cls from './ReadChapterPage.module.scss';
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
