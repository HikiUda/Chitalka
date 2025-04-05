import { classNames } from '@packages/model/src/lib/helpers/classNames';
import cls from './getStyleLineClamp.module.scss';

type LineClampType = '1' | '2' | '3' | '4';

interface GetStyleLineClampProps {
    lineClamp?: LineClampType;
    huphens?: boolean;
    wordBreak?: boolean;
}

const lineClampClasses: Record<LineClampType, string> = {
    1: cls.lineClamp1,
    2: cls.lineClamp2,
    3: cls.lineClamp3,
    4: cls.lineClamp4,
};

export function getStyleLineClamp(props: GetStyleLineClampProps = {}) {
    const { lineClamp = '2', huphens, wordBreak } = props;

    return classNames(cls.lineClamp, { [cls.huphens]: huphens, [cls.wordBreak]: wordBreak }, [
        lineClampClasses[lineClamp],
    ]);
}
