import { FC } from 'react';

import MangaApp from 'mangasite/App';

import ArtApp from 'artsite/App';

import cls from './app.module.scss';

interface AppProps {
    className?: string;
}

export const App: FC<AppProps> = () => {
    return (
        <div className={cls.app}>
            <MangaApp />
            <ArtApp />
        </div>
    );
};
