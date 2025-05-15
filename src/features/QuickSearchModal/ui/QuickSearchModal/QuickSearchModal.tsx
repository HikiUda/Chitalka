import { FC } from 'react';
import { BrowserView, isMobile, MobileView } from 'react-device-detect';
import { QuickSearchModalContent } from '../QuickSearchModalContent';
import cls from './QuickSearchModal.module.scss';
import { Modal } from '@/shared/deprecate-ui/Modal';
import { Drawer } from '@/shared/deprecate-ui/Drawer';
import { Button } from '@/shared/deprecate-ui/Button';
import SearchSvg from '@/shared/assets/icon/common/search.svg?react';
import { Icon } from '@/shared/deprecate-ui/Icon/Icon';
import { classNames } from '@/shared/lib/helpers/classNames';

interface QuickSearchModalProps {
    className?: string;
}

export const QuickSearchModal: FC<QuickSearchModalProps> = (props) => {
    const { className } = props;

    const modalTrigger = (
        <Button
            color="none"
            data-testid="QuickSearchModal-Button"
            bold={!isMobile}
            className={classNames(cls.modalTrigger, { [cls.mobile]: isMobile }, [className])}
        >
            <Icon Svg={SearchSvg} width={20} height={20} /> {isMobile ? 'Быстрый поиск' : 'Поиск'}
        </Button>
    );

    return (
        <>
            <BrowserView>
                <Modal modalVerticalPosition="top" trigger={modalTrigger}>
                    <QuickSearchModalContent />
                </Modal>
            </BrowserView>
            <MobileView>
                <Drawer trigger={modalTrigger}>
                    <QuickSearchModalContent />
                </Drawer>
            </MobileView>
        </>
    );
};
