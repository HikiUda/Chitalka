import { memo } from 'react';
import { classNames } from '@packages/model/src/lib/classNames';
import EyeOffSvg from '@packages/ui/src/assets/icon/common/eyeOff.svg';
import { AppLink } from '@packages/ui/src/shared/AppLink';
// import EyeSvg from '@packages/ui/src/assets/icon/common/eye.svg';
import { Icon } from '@packages/ui/src/shared/Icon';
import { getFlex, HStack } from '@packages/ui/src/shared/Stack';
import cls from './ChapterLine.module.scss';

interface ChapterLineProps {
    className?: string;
    id?: string;
}

export const ChapterLine = memo((props: ChapterLineProps) => {
    const { className, id } = props;

    return (
        <AppLink
            id={id}
            backgroundOnHover
            to="f"
            className={classNames(cls.ChapterLine, {}, [className, getFlex({ max: true })])}
        >
            <Icon Svg={EyeOffSvg} width={15} height={15} />
            <HStack justify="start" className={cls.title} max>
                <span>Tom 1</span>
                <span>Chapter 1</span>
                {' - '}
                <span>Chapter name</span>
            </HStack>
            <span>21.05.2023</span>
        </AppLink>
    );
});
