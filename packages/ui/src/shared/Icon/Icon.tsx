import React, { memo } from 'react';
import { classNames } from '@packages/model/src/lib/classNames/classNames';
import cls from './Icon.module.scss';

interface IconProps extends React.SVGProps<SVGSVGElement> {
    className?: string;
    Svg: React.FC<React.SVGProps<SVGSVGElement>>;
}

export const Icon = memo((props: IconProps) => {
    const { className, Svg, ...otherProps } = props;

    return (
        <div className={classNames(cls.Icon, {}, [className])}>
            <Svg {...otherProps} />
        </div>
    );
});
