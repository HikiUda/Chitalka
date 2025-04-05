import { classNames } from '@packages/model/src/lib/helpers/classNames';
import cls from './getStyleScrollbar.module.scss';

type ScrollSize = 'thin' | 'bold';

interface GetStyleScrollbarProps {
    size?: ScrollSize;
}

export function getStyleScrollbar(props: GetStyleScrollbarProps = {}) {
    const { size = 'thin' } = props;
    return classNames(cls.scroll, {}, [cls[size]]);
}
