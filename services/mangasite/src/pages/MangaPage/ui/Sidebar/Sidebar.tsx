import { memo } from 'react';
import { classNames } from '@packages/model/src/lib/helpers/classNames';
import { VStack } from '@packages/ui/src/shared/Stack';
import { getStyleScrollbar } from '@packages/ui/src/shared/StyleHooks';
import { AppLink } from '@packages/ui/src/shared/AppLink';
import { MangaType } from '@packages/model/src/api/manga/types/manga';
import Skeleton from 'react-loading-skeleton';
import { SidebarItem } from '../SidebarItem/SidebarItem';
import cls from './Sidebar.module.scss';

interface SidebarProps {
    className?: string;
    manga?: MangaType;
    isLaoding?: boolean;
}

export const Sidebar = memo((props: SidebarProps) => {
    const { className, manga, isLaoding } = props;
    //TODO link to catalog
    return (
        <VStack
            justify="start"
            align={isLaoding ? 'stretch' : 'start'}
            className={classNames(cls.Sidebar, {}, [
                className,
                getStyleScrollbar({ size: 'thin' }),
            ])}
        >
            <SidebarItem title="Type">
                {isLaoding ? (
                    <Skeleton width={70} />
                ) : (
                    <AppLink underlineOnHover to="">
                        {manga?.type}
                    </AppLink>
                )}
            </SidebarItem>
            <SidebarItem title="Status">
                {isLaoding ? <Skeleton width={70} /> : <AppLink to="">{manga?.status}</AppLink>}
            </SidebarItem>
            {!!manga?.authors.length && (
                <SidebarItem title="Authors">
                    {manga?.authors.map((author) => (
                        <AppLink key={author} to="">
                            {author}
                        </AppLink>
                    ))}
                </SidebarItem>
            )}
            {!!manga?.artists.length && (
                <SidebarItem title="Artists">
                    {manga?.artists.map((artist) => (
                        <AppLink key={artist} to="">
                            {artist}
                        </AppLink>
                    ))}
                </SidebarItem>
            )}
            {!!manga?.publishers.length && (
                <SidebarItem title="Publishers">
                    {manga.publishers.map((publisher) => (
                        <AppLink key={publisher} to="">
                            {publisher}
                        </AppLink>
                    ))}
                </SidebarItem>
            )}
            {!!manga?.otherTitles.length && (
                <SidebarItem title="Other titles">
                    {manga?.otherTitles.map((title, ind) => <span key={ind}>{title}</span>)}
                </SidebarItem>
            )}
            {isLaoding && (
                <>
                    <Skeleton width="50%" />
                    <Skeleton height={200} />
                </>
            )}
        </VStack>
    );
});
