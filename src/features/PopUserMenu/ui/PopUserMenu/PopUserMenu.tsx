import { FC } from 'react';
import { useQuery } from '@tanstack/react-query';
import { ProfileLink } from '../ProfileLink/ProfileLink';
import { commonLink } from '../../model/config/commonLink';
import { ExitButton } from '../ExitButton/ExitButton';
import cls from './PopUserMenu.module.scss';
import { classNames } from '@/shared/lib/helpers/classNames';
import { useAppDisign, useAppTheme } from '@/shared/kernel/theme';
import { Popover } from '@/shared/deprecate-ui/Popover';
import { Button } from '@/shared/deprecate-ui/Button';
import { VStack } from '@/shared/deprecate-ui/Stack';
import { LinkList } from '@/shared/deprecate-ui/LinkList';
import { Avatar } from '@/shared/deprecate-ui/Avatar';
import { Divider } from '@/shared/deprecate-ui/Divider';
import { UserDataApi } from '@/shared/api/deprecated/user';

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
    const { toggleTheme } = useAppTheme();
    const { toggleDisign } = useAppDisign();

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
