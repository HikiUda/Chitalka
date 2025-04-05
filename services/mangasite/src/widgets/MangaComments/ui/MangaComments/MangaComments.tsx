import { FC } from 'react';
import { classNames } from '@packages/model/src/lib/helpers/classNames';
import cls from './MangaComments.module.scss';
import { CommentForm } from '@/entities/CommentForm';

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
