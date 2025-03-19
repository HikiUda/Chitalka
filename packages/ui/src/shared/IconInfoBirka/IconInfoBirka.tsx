import { FC, memo, SVGProps } from 'react';
import { classNames } from '@packages/model/src/lib/classNames';
import { Icon } from '../Icon/Icon';
import cls from './IconInfoBirka.module.scss';

type InfoColor = 'primary' | 'secondary' | 'default';
type BackgroundColor = 'primary' | 'secondary' | 'default';

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
        <div className={classNames(cls.IconInfoBirka, {}, [className, cls[bgColor]])}>
            {Svg && <Icon Svg={Svg} width={15} hanging={15} />}
            <span className={classNames(cls.info, {}, [cls[infoColor]])}>{info}</span>
        </div>
    );
});
