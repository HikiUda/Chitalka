import { FC } from 'react';
import { classNames } from '@packages/model/src/lib/helpers/classNames';
import { useDisign, useTheme } from '@packages/model/src/config/theme';
import { Popover } from '@packages/ui/src/shared/Popover';
import { Button } from '@packages/ui/src/shared/Button';
import { VStack } from '@packages/ui/src/shared/Stack';
import { LinkList } from '@packages/ui/src/shared/LinkList';
import { Avatar } from '@packages/ui/src/shared/Avatar';
import { Divider } from '@packages/ui/src/shared/Divider';
import { useQuery } from '@tanstack/react-query';
import { UserDataApi } from '@packages/model/src/api/auth';
import { ProfileLink } from '../ProfileLink/ProfileLink';
import { commonLink } from '../../model/config/commonLink';
import { ExitButton } from '../ExitButton/ExitButton';
import cls from './PopUserMenu.module.scss';

interface PopUserMenuProps {
    className?: string;
}

export const PopUserMenu: FC<PopUserMenuProps> = (props) => {
    const { className } = props;
    const { data } = useQuery(UserDataApi.getUserDataQueryOptions());
    //TODO avatar
    const trigger = (
        <Button theme="clear" noHover>
            <Avatar img={data?.avatar} />
        </Button>
    );
    const { toggleTheme } = useTheme();
    const { toggleDisign } = useDisign();

    const onDisign = () => {
        toggleDisign();
    };
    //TODO possible lazy
    return (
        <Popover button={trigger} className={classNames(cls.PopUserMenu, {}, [className])}>
            <VStack>
                <ProfileLink />
                <Divider />
                <LinkList backgroundOnHover items={commonLink} />
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
