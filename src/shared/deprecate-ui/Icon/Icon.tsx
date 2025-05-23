import React, { FC, memo, SVGProps } from 'react';
import cls from './Icon.module.scss';
import { classNames } from '@/shared/lib/helpers/classNames/classNames';

interface IconProps extends React.SVGProps<SVGSVGElement> {
    className?: string;
    Svg: FC<SVGProps<SVGSVGElement>>;
    size?: number;
}

export const Icon = memo((props: IconProps) => {
    const { className, width, height, size = 15, Svg, ...otherProps } = props;
    return (
        <div
            style={{ width: width || size, height: height || size }}
            className={classNames(cls.Icon, {}, [className])}
        >
            <Svg width={width || size} height={height || size} {...otherProps} />
        </div>
    );
});
