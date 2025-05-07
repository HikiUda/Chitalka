import { FC } from 'react';
import { useQuery } from '@tanstack/react-query';
import { ProfileLink } from '../ProfileLink/ProfileLink';
import { commonLink } from '../../model/config/commonLink';
import { ExitButton } from '../ExitButton/ExitButton';
import cls from './PopUserMenu.module.scss';
import { classNames } from '@/shared/lib/helpers/classNames';
import { useDisign, useTheme } from '@/shared/config/theme';
import { Popover } from '@/shared/ui/Popover';
import { Button } from '@/shared/ui/Button';
import { VStack } from '@/shared/ui/Stack';
import { LinkList } from '@/shared/ui/LinkList';
import { Avatar } from '@/shared/ui/Avatar';
import { Divider } from '@/shared/ui/Divider';
import { UserDataApi } from '@/shared/api/user';

interface PopUserMenuProps {
    className?: string;
}
export const PopUserMenu: FC<PopUserMenuProps> = (props) => {
    const { className } = props;
    const { data } = useQuery(UserDataApi.getUserDataQueryOptions());
    const trigger = (
        <Button data-testid="PopUserMenu-Button" theme="clear" noHover>
            <Avatar img={data?.avatar} />
        </Button>
    );
    const { toggleTheme } = useTheme();
    const { toggleDisign } = useDisign();

    const onDisign = () => {
        toggleDisign();
    };
    return (
        <Popover button={trigger} className={classNames(cls.PopUserMenu, {}, [className])}>
            <VStack>
                <ProfileLink username={data?.name} />
                <Divider />
                <LinkList noOpacityHover backgroundOnHover items={commonLink} />
                <Divider />
                <button type="button" onClick={toggleTheme}>
                    theme
                </button>
                <button type="button" onClick={onDisign}>
                    disign
                </button>
                <ExitButton />
            </VStack>
        </Popover>
    );
};
