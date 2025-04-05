import React, { FC, memo, SVGProps } from 'react';
import { classNames } from '@packages/model/src/lib/helpers/classNames/classNames';
import cls from './Icon.module.scss';

interface IconProps extends React.SVGProps<SVGSVGElement> {
    className?: string;
    Svg: FC<SVGProps<SVGSVGElement>>;
}

export const Icon = memo((props: IconProps) => {
    const { className, width, height, Svg, ...otherProps } = props;

    return (
        <div style={{ width, height }} className={classNames(cls.Icon, {}, [className])}>
            <Svg width={width} height={height} {...otherProps} />
        </div>
    );
});
