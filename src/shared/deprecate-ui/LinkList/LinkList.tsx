import { FC, memo, SVGProps } from 'react';
import { classNames } from '@/shared/lib/helpers/classNames';
import { getFlex, VStack } from '../Stack';
import { AppLink } from '../AppLink';
import { Icon } from '../Icon';
import { AppLinkProps } from '../AppLink/AppLink';

export interface LinkListItem {
    icon?: FC<SVGProps<SVGSVGElement>>;
    text: string;
    to: string;
}

interface LinkListProps extends Omit<AppLinkProps, 'className' | 'children' | 'to'> {
    className?: string;
    /**
     * icon - svg
     *
     * text - string
     *
     * to - string
     */
    items?: LinkListItem[];
}

export const LinkList = memo((props: LinkListProps) => {
    const { className, items = [], ...otherProps } = props;

    return (
        <VStack max className={classNames('', {}, [className])}>
            {items.map((item, ind) => (
                <AppLink
                    className={getFlex({ max: true, justify: 'start' })}
                    to={item.to}
                    key={ind}
                    {...otherProps}
                >
                    {item.icon ? <Icon Svg={item.icon} width={20} height={20} /> : null}
                    {item.text}
                </AppLink>
            ))}
        </VStack>
    );
});
