import { memo } from 'react';
import { classNames } from '@packages/model/src/lib/helpers/classNames';
import cls from './ToChapterLink.module.scss';

interface ToChapterLinkProps {
    className?: string;
    chapter?: number;
}

export const ToChapterLink = memo((props: ToChapterLinkProps) => {
    const { className, chapter } = props;

    return (
        <a href={'#chapter' + chapter} className={classNames(cls.ToChapterLink, {}, [className])}>
            {chapter}
        </a>
    );
});
