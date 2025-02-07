import { FC } from 'react';

import cls from './app.module.scss';
import MainSvg from './main.svg';
import Image from './sss.png';
import { Button } from 'shared/Button/Button';

interface AppProps {
    className?: string;
}

export const App: FC<AppProps> = () => {
    return (
        <div className={cls.app}>
            <MainSvg style={{ color: 'green' }} />
            <Button />
            <img
                src={Image}
                alt="sss"
            />
            mangasite
        </div>
    );
};
export default App;
