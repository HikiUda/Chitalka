import { useParams } from 'react-router-dom';
import { Page } from '@/shared/ui/layout/Page';
import { PathParams, Routes } from '@/shared/kernel/router';

const ReadMangaPage = () => {
    const { mangaId, chapterId } = useParams<PathParams[typeof Routes.MANGA_READ]>();
    if (!mangaId || !chapterId) throw new Error('ReadMangaPage required mangaId and chapterId');

    return (
        <Page>
            <div>soon</div>
        </Page>
    );
};

export const Component = ReadMangaPage;
