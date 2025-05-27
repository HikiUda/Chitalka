import { FC } from 'react';

interface MangaCommentsProps {
    className?: string;
}

export const MangaComments: FC<MangaCommentsProps> = (props) => {
    const { className } = props;
    return <div className={className}>comments</div>;
};
