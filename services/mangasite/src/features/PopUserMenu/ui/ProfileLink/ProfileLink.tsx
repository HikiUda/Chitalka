import { memo } from 'react';
import { classNames } from '@packages/model/src/lib/helpers/classNames';
import PersonSvg from '@packages/ui/src/assets/icon/common/person.svg';
import ArrowSvg from '@packages/ui/src/assets/icon/common/arrow.svg';
import { AppLink } from '@packages/ui/src/shared/AppLink';
import { getFlex, HStack, VStack } from '@packages/ui/src/shared/Stack';
import { Icon } from '@packages/ui/src/shared/Icon';
import { useGetUserDataQuery } from '@packages/model/src/api/auth';
import cls from './ProfileLink.module.scss';

interface ProfileLinkProps {
    className?: string;
}

export const ProfileLink = memo((props: ProfileLinkProps) => {
    const { className } = props;

    const { data, isLoading } = useGetUserDataQuery();

    return (
        <AppLink
            //TODO link
            to={'/mangasite'}
            theme="none"
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
                <div>{isLoading ? '######' : data?.name}</div>
            </VStack>
        </AppLink>
    );
});
