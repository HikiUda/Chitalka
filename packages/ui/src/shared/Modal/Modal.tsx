import { FC, ReactNode } from 'react';
import { Dialog, DialogTrigger, ModalOverlay, Modal as AModal } from 'react-aria-components';
import { classNames } from '@packages/model/src/lib/classNames';
import cls from './Modal.module.scss';

type ModalVerticalPosition = 'center' | 'top' | 'bottom';
type ModalHorizonPosition = 'center' | 'right' | 'left';

interface ModalProps {
    className?: string;
    children?: ReactNode;
    trigger?: ReactNode;
    modalVerticalPosition?: ModalVerticalPosition;
    modalHorizonPosition?: ModalHorizonPosition;
    maxWidth?: number | string;
    isOpen?: boolean;
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
//TODO block scroll
export const Modal: FC<ModalProps> = (props) => {
    const {
        className,
        children,
        trigger,
        modalVerticalPosition = 'center',
        modalHorizonPosition = 'center',
        maxWidth = 600,
        isOpen,
    } = props;

    return (
        <DialogTrigger>
            {trigger}
            <ModalOverlay
                defaultOpen={isOpen}
                isDismissable
                className={classNames(cls.overlay, {}, [
                    modalVerticalClasses[modalVerticalPosition],
                    modalHorizonClasses[modalHorizonPosition],
                ])}
            >
                <AModal style={{ maxWidth }} className={classNames(cls.modal, {}, [className])}>
                    <Dialog aria-label="modal" className={cls.dialog}>
                        {children}
                    </Dialog>
                </AModal>
            </ModalOverlay>
        </DialogTrigger>
    );
};
