/* eslint-disable react/prop-types */
import { isMobile } from 'react-device-detect';
import { ComponentType, ReactNode } from 'react';
import cls from './layout.module.css';
import { Page } from '@/shared/layout/Page';
import { cn } from '@/shared/lib/css';
import { DivSlot } from '@/shared/ui/kit/divslot';

type SlotComp = ComponentType<{
    asChild?: boolean;
    children?: ReactNode;
}>;

const BannerSlot: SlotComp = ({ children, asChild }) => {
    return (
        <DivSlot
            asChild={asChild}
            className={cn(cls.banner, isMobile ? 'absolute top-0 left-0 right-0 h-162' : '-mx-4')}
        >
            {children}
        </DivSlot>
    );
};

const CoverSlot: SlotComp = ({ children, asChild }) => {
    //w-45
    return (
        <DivSlot asChild={asChild} className={cn(cls.cover, `z-2`, isMobile && 'mb-2')}>
            {children}
        </DivSlot>
    );
};

const TitleSlot: SlotComp = ({ children, asChild }) => {
    return (
        <DivSlot
            asChild={asChild}
            className={cn(
                cls.title,
                'flex z-2 mb-2',
                isMobile ? 'flex-col-reverse items-center gap-6' : 'gap-20 w-full items-end',
            )}
        >
            {children}
        </DivSlot>
    );
};

const ButtonsSlot: SlotComp = ({ children, asChild }) => {
    return (
        <DivSlot
            asChild={asChild}
            className={cn(
                cls.buttons,
                'flex flex-col w-full justify-center items-center max-w-70 grow z-4 gap-1',
                isMobile && 'px-1 mb-2',
            )}
        >
            {children}
        </DivSlot>
    );
};

const SidebarSlot: SlotComp = ({ children, asChild }) => {
    return (
        <DivSlot
            asChild={asChild}
            className={cn(
                cls.sidebar,
                'flex flex-col justify-start items-start overflow-auto max-h-125 gap-4 p-3 bg-card shadow-sm rounded-lg',
            )}
        >
            {children}
        </DivSlot>
    );
};

const ContentSlot: SlotComp = ({ children, asChild }) => {
    return (
        <DivSlot
            asChild={asChild}
            className={cn(cls.content, 'bg-card shadow-sm rounded-lg pb-3 w-full z-5 min-h-100')}
        >
            {children}
        </DivSlot>
    );
};

type MangaPageLayoutProps = {
    banner: (Slot: SlotComp) => ReactNode;
    cover: (Slot: SlotComp) => ReactNode;
    title: (Slot: SlotComp) => ReactNode;
    buttons: (Slot: SlotComp) => ReactNode;
    sidebar: (Slot: SlotComp) => ReactNode;
    content: (Slot: SlotComp) => ReactNode;
};

export const MangaPageLayout = (props: MangaPageLayoutProps) => {
    const { banner, cover, title, buttons, sidebar, content } = props;

    return (
        <Page>
            <div
                className={cn(
                    isMobile
                        ? 'relative flex flex-col gap-1 pt-10 items-center'
                        : `${cls.gridTemplete} grid gap-4`,
                )}
            >
                {banner(BannerSlot)}
                {cover(CoverSlot)}
                {title(TitleSlot)}
                {buttons(ButtonsSlot)}
                {!isMobile && sidebar(SidebarSlot)}
                {content(ContentSlot)}
            </div>
        </Page>
    );
};
