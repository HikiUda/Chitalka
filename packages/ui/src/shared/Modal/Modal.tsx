import { FC, ReactNode, useEffect, useState } from 'react';
import { Dialog, ModalOverlay, Modal as AModal, ButtonContext } from 'react-aria-components';
import { classNames } from '@packages/model/src/lib/helpers/classNames';
import { useLocation } from 'react-router-dom';
import cls from './Modal.module.scss';

type ModalVerticalPosition = 'center' | 'top' | 'bottom';
type ModalHorizonPosition = 'center' | 'right' | 'left';

interface ModalProps {
    className?: string;
    children?: ReactNode;
    trigger?: ReactNode;
    modalVerticalPosition?: ModalVerticalPosition;
    modalHorizonPosition?: ModalHorizonPosition;
    defaultOpen?: boolean;
    shouldCloseOnInteractOutside?: (elm: Element) => boolean;
}

const modalVerticalClasses: Record<ModalVerticalPosition, string> = {
    center: cls.verticalCenter,
    top: cls.verticlalTop,
    bottom: cls.verticalBottom,
};
const modalHorizonClasses: Record<ModalHorizonPosition, string> = {
    center: cls.horizonCenter,
    right: cls.horisonRight,
    left: cls.horizonLeft,
};
export const Modal: FC<ModalProps> = (props) => {
    const {
        className,
        children,
        trigger,
        modalVerticalPosition = 'center',
        modalHorizonPosition = 'center',
        defaultOpen = false,
        shouldCloseOnInteractOutside,
    } = props;

    const [isOpen, setIsOpen] = useState(defaultOpen);
    const location = useLocation();

    useEffect(() => {
        setIsOpen(false);
    }, [location.key]);

    useEffect(() => {
        if (defaultOpen) {
            setIsOpen(true);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <ButtonContext.Provider value={{ onPress: () => setIsOpen(true) }}>
            {trigger}
            <ModalOverlay
                isOpen={isOpen}
                onOpenChange={setIsOpen}
                shouldCloseOnInteractOutside={shouldCloseOnInteractOutside}
                isDismissable
                className={classNames(cls.overlay, {}, [
                    modalVerticalClasses[modalVerticalPosition],
                    modalHorizonClasses[modalHorizonPosition],
                ])}
            >
                <AModal className={classNames(cls.modal, {}, [className])}>
                    <Dialog aria-label="modal" className={cls.dialog}>
                        {children}
                    </Dialog>
                </AModal>
            </ModalOverlay>
        </ButtonContext.Provider>
    );
};
