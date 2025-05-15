import { memo } from 'react';
import cls from './ProfileLink.module.scss';
import { classNames } from '@/shared/lib/helpers/classNames';
import PersonSvg from '@/shared/assets/icon/common/person.svg?react';
import ArrowSvg from '@/shared/assets/icon/common/arrow.svg?react';
import { AppLink } from '@/shared/deprecate-ui/AppLink';
import { getFlex, HStack, VStack } from '@/shared/deprecate-ui/Stack';
import { Icon } from '@/shared/deprecate-ui/Icon';

interface ProfileLinkProps {
    className?: string;
    username?: string;
}

export const ProfileLink = memo((props: ProfileLinkProps) => {
    const { className, username } = props;

    return (
        <AppLink
            //TODO link
            to={'/mangasite'}
            noOpacityHover
            className={classNames(cls.ProfileLink, {}, [
                className,
                getFlex({ gap: '16', max: true, justify: 'start' }),
            ])}
        >
            <Icon Svg={PersonSvg} width={20} height={20} />
            <VStack gap="4">
                <HStack className={cls.subtitle}>
                    Мой Профиль <Icon Svg={ArrowSvg} width={14} height={14} />
                </HStack>
                <div>{username ? username : '######'}</div>
            </VStack>
        </AppLink>
    );
});
