import { FC } from 'react';
import { classNames } from '@packages/model/src/lib/classNames';
import { CommentForm } from '@packages/ui/src/entities/CommentForm';
import cls from './MangaComments.module.scss';

interface MangaCommentsProps {
    className?: string;
}

const MangaComments: FC<MangaCommentsProps> = (props) => {
    const { className } = props;

    return (
        <div className={classNames(cls.MangaComments, {}, [className])}>
            <CommentForm />
        </div>
    );
};
export default MangaComments;
