import { FC } from 'react';
import cls from './MangaComments.module.scss';
import { classNames } from '@/shared/lib/helpers/classNames';
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
