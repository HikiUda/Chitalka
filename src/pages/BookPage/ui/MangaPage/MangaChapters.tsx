import { FC } from 'react';

interface MangaChaptersProps {
    className?: string;
}

export const MangaChapters: FC<MangaChaptersProps> = (props) => {
    const { className } = props;
    return <div className={className}>chapters</div>;
};
