import { memo } from 'react';
import { classNames } from '@/shared/lib/helpers/classNames';
import cls from './Tag.module.scss';

interface TagProps {
    className?: string;
    text?: string;
    /** simbol # on start of component */
    withHash?: boolean;
    mini?: boolean;
}

export const Tag = memo((props: TagProps) => {
    const { className, text, withHash = true, mini } = props;

    return (
        <div className={classNames(cls.Tag, { [cls.mini]: mini }, [className])}>
            {withHash && '# '}
            {text}
        </div>
    );
});
