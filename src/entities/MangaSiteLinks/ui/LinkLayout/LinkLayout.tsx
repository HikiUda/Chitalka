import { FC, SVGProps } from 'react';
import { classNames } from '@/shared/lib/helpers/classNames';
import { AppLink } from '@/shared/ui/AppLink';
import { Icon } from '@/shared/ui/Icon';
import { getFlex } from '@/shared/ui/Stack';

export interface LinkLayoutCommonProps {
    iconOnly?: boolean;
    iconSize?: number;
}

interface LinkLayoutProps extends LinkLayoutCommonProps {
    className?: string;
    to: string;
    Svg: FC<SVGProps<SVGSVGElement>>;
    text: string;
}

export const LinkLayout: FC<LinkLayoutProps> = (props) => {
    const { className, to, Svg, text, iconOnly, iconSize = 20 } = props;

    return (
        <AppLink
            backgroundOnHover
            noOpacityHover
            bold
            className={classNames('', {}, [className, getFlex()])}
            to={to}
        >
            <Icon Svg={Svg} width={iconSize} height={iconSize} />
            {!iconOnly && <span>{text}</span>}
        </AppLink>
    );
};
