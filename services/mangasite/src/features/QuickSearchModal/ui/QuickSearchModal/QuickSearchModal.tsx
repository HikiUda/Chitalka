import { FC } from 'react';
import { BrowserView, isMobile, MobileView } from 'react-device-detect';
import { Modal } from '@packages/ui/src/shared/Modal';
import { Drawer } from '@packages/ui/src/shared/Drawer';
import { Input } from '@packages/ui/src/shared/Input';
import { Button } from '@packages/ui/src/shared/Button';
import SearchSvg from '@packages/ui/src/assets/icon/common/search.svg';
import { Icon } from '@packages/ui/src/shared/Icon/Icon';
import { HStack } from '@packages/ui/src/shared/Stack';
import { classNames } from '@packages/model/src/lib/classNames';
import { ResentSearch } from '../ResentSearch/ResentSearch';
import { MangaSearchList } from '../MangaSearchList/MangaSearchList';
import cls from './QuickSearchModal.module.scss';

interface QuickSearchModalProps {
    className?: string;
}
/**
 *
 * TODO lazy
 */
export const QuickSearchModal: FC<QuickSearchModalProps> = (props) => {
    const { className } = props;

    const modalTrigger = (
        <Button className={classNames(cls.modalTrigger, { [cls.mobile]: isMobile })}>
            <Icon Svg={SearchSvg} width={20} height={20} /> {isMobile ? 'Быстрый поиск' : 'Поиск'}
        </Button>
    );

    const content = (
        <>
            <HStack max align="center" className={cls.block}>
                <Icon Svg={SearchSvg} width={20} height={20} />{' '}
                <Input placeholder="Быстрый поиск" maxWidth />
            </HStack>
            <ResentSearch className={cls.block} />
            <MangaSearchList />
        </>
    );

    return (
        <>
            <BrowserView>
                <Modal modalVerticalPosition="top" trigger={modalTrigger}>
                    {content}
                </Modal>
            </BrowserView>
            <MobileView>
                <Drawer trigger={modalTrigger}>{content}</Drawer>
            </MobileView>
        </>
    );
};
