import { memo } from 'react';
import { classNames } from '@packages/model/src/lib/helpers/classNames';
import cls from './Tag.module.scss';

interface TagProps {
    className?: string;
    text?: string;
    /** simbol # on start of component */
    withHash?: boolean;
}

export const Tag = memo((props: TagProps) => {
    const { className, text, withHash = true } = props;

    return (
        <div className={classNames(cls.Tag, {}, [className])}>
            {withHash && '# '}
            {text}
        </div>
    );
});
