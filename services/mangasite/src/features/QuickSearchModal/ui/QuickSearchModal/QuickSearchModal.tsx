import { FC } from 'react';
import { BrowserView, isMobile, MobileView } from 'react-device-detect';
import { Modal } from '@packages/ui/src/shared/Modal';
import { Drawer } from '@packages/ui/src/shared/Drawer';
import { Button } from '@packages/ui/src/shared/Button';
import SearchSvg from '@packages/ui/src/assets/icon/common/search.svg';
import { Icon } from '@packages/ui/src/shared/Icon/Icon';
import { classNames } from '@packages/model/src/lib/helpers/classNames';

import { QuickSearchModalContent } from '../QuickSearchModalContent';
import cls from './QuickSearchModal.module.scss';

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
