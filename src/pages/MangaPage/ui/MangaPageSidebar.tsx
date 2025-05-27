import { FC } from 'react';
import { OtherTitlesType } from '../model/useMangaTitles';
import { ScopeCopyItems, ScopeLinks, ScopeLinksProps } from '@/entities/ScopeItems';

interface MangaPageSidebarProps {
    className?: string;
    info: ScopeLinksProps[];
    otherTitles: OtherTitlesType;
}

export const MangaPageSidebar: FC<MangaPageSidebarProps> = (props) => {
    const { className, info, otherTitles } = props;
    return (
        <div className={className}>
            {info.map((scope, ind) => (
                <ScopeLinks key={ind} title={scope.title} links={scope.links} />
            ))}
            {!!otherTitles.titles.length && (
                <ScopeCopyItems title={otherTitles.title} items={otherTitles.titles} />
            )}
        </div>
    );
};
