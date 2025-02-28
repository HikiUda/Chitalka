import { FC, ReactNode } from 'react';
import { Dialog, DialogTrigger, ModalOverlay, Modal as AModal } from 'react-aria-components';
import { classNames } from '@packages/model/src/lib/classNames';
import cls from './Modal.module.scss';

type ModalVerticalPosition = 'center' | 'top' | 'bottom';
type ModalHorizonPosition = 'center' | 'right' | 'left';

interface ModalProps {
    children?: ReactNode;
    trigger?: ReactNode;
    modalVerticalPosition?: ModalVerticalPosition;
    modalHorizonPosition?: ModalHorizonPosition;
    maxWidth?: number | string;
    defaultOpen?: boolean;
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
        children,
        trigger,
        modalVerticalPosition = 'center',
        modalHorizonPosition = 'center',
        maxWidth = 600,
        defaultOpen,
    } = props;
    console.log(maxWidth);
    return (
        <DialogTrigger>
            {trigger}
            <ModalOverlay
                defaultOpen={defaultOpen}
                isDismissable
                className={classNames(cls.overlay, {}, [
                    modalVerticalClasses[modalVerticalPosition],
                    modalHorizonClasses[modalHorizonPosition],
                ])}
            >
                <AModal style={{ maxWidth }} className={cls.modal}>
                    <Dialog>{children}</Dialog>
                </AModal>
            </ModalOverlay>
        </DialogTrigger>
    );
};
