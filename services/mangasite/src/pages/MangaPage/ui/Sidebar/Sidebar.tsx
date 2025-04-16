import { memo } from 'react';
import { classNames } from '@packages/model/src/lib/helpers/classNames';
import { VStack } from '@packages/ui/src/shared/Stack';
import { getStyleScrollbar } from '@packages/ui/src/shared/StyleHooks';
import { AppLink } from '@packages/ui/src/shared/AppLink';
import { SidebarItem } from '../SidebarItem/SidebarItem';
import cls from './Sidebar.module.scss';
import { MangaType } from '@/shared/api/individualManga';

interface SidebarProps {
    className?: string;
    manga: MangaType;
}

export const Sidebar = memo((props: SidebarProps) => {
    const { className, manga } = props;
    //TODO link to catalog
    return (
        <VStack
            justify="start"
            align="start"
            className={classNames(cls.Sidebar, {}, [
                className,
                getStyleScrollbar({ size: 'thin' }),
            ])}
        >
            <SidebarItem title="Type">
                <AppLink underlineOnHover to="">
                    {manga?.type}
                </AppLink>
            </SidebarItem>
            <SidebarItem title="Status">
                <AppLink to="">{manga.status}</AppLink>
            </SidebarItem>
            {!!manga?.authors.length && (
                <SidebarItem title="Authors">
                    {manga.authors.map((author) => (
                        <AppLink key={author} to="">
                            {author}
                        </AppLink>
                    ))}
                </SidebarItem>
            )}
            {!!manga?.artists.length && (
                <SidebarItem title="Artists">
                    {manga.artists.map((artist) => (
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
                    {manga.otherTitles.map((title, ind) => (
                        <span key={ind}>{title}</span>
                    ))}
                </SidebarItem>
            )}
        </VStack>
    );
});
