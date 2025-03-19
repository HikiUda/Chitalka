import { FC, SVGProps } from 'react';
import { classNames } from '@packages/model/src/lib/classNames';
import { AppLink } from '@packages/ui/src/shared/AppLink';
import { Icon } from '@packages/ui/src/shared/Icon';
import { getFlex } from '@packages/ui/src/shared/Stack';

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
            textStyle="bold"
            className={classNames('', {}, [className, getFlex()])}
            to={to}
        >
            <Icon Svg={Svg} width={iconSize} height={iconSize} />
            {!iconOnly && <span>{text}</span>}
        </AppLink>
    );
};
