import { FC, ReactNode } from 'react';
import { classNames } from '@packages/model/src/lib/helpers/classNames';
import cls from './ChapterPageContainer.module.scss';

interface ChapterPageContainerProps {
    className?: string;
    children?: ReactNode;
    maxWidth?: number;
}

export const ChapterPageContainer: FC<ChapterPageContainerProps> = (props) => {
    const { className, children, maxWidth = 700 } = props;

    return (
        <div style={{ maxWidth }} className={classNames(cls.ChapterPageContainer, {}, [className])}>
            {children}
        </div>
    );
};
