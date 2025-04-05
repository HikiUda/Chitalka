import { FC, memo, SVGProps } from 'react';
import { classNames } from '@packages/model/src/lib/helpers/classNames';
import { Icon } from '../Icon/Icon';
import { getFlex } from '../Stack';
import cls from './IconInfoBirka.module.scss';

type InfoColor = 'primary' | 'default';
type BackgroundColor = 'secondary' | 'default';

interface IconInfoBirkaProps {
    className?: string;
    Svg?: FC<SVGProps<SVGSVGElement>>;
    info?: string | number;
    bgColor?: BackgroundColor;
    infoColor?: InfoColor;
}

export const IconInfoBirka = memo((props: IconInfoBirkaProps) => {
    const { className, Svg, info, bgColor = 'default', infoColor = 'default' } = props;

    return (
        <div
            className={classNames(cls.IconInfoBirka, {}, [
                className,
                cls[bgColor],
                getFlex({ gap: '4', align: 'stretch' }),
            ])}
        >
            {Svg && <Icon Svg={Svg} width={15} hanging={15} />}
            <span className={classNames(cls.info, {}, [cls[infoColor]])}>{info}</span>
        </div>
    );
});
