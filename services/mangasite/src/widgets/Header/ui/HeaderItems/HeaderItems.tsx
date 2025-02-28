import { memo } from 'react';
import { HStack } from '@packages/ui/src/shared/Stack';
import { classNames } from '@packages/model/src/lib/classNames';
import { AppLink } from '@packages/ui/src/shared/AppLink';
import { Icon } from '@packages/ui/src/shared/Icon/Icon';
import { HeaderLinks } from '../../model/config/HeaderLinks/HeaderItems';
import cls from './HeaderItems.module.scss';

interface HeaderItemsProps {
    className?: string;
}

export const HeaderItems = memo((props: HeaderItemsProps) => {
    const { className } = props;

    return (
        <HStack gap="16" className={classNames(cls.HeaderItems, {}, [className])}>
            {HeaderLinks.map((link, ind) => (
                <AppLink
                    backgroundOnHover
                    textStyle="bold"
                    className={cls.link}
                    to={link.path}
                    key={ind}
                >
                    <Icon Svg={link.Icon} width={20} height={20} />
                    <span>{link.text}</span>
                </AppLink>
            ))}
        </HStack>
    );
});
