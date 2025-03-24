import { FC, ReactNode } from 'react';
import { classNames } from '@packages/model/src/lib/classNames';
import { Modal } from '@packages/ui/src/shared/Modal';
import { RateModalContent } from '../RateModalContent';
import cls from './RateModal.module.scss';

interface RateModalProps {
    className?: string;
    button?: ReactNode;
}

export const RateModal: FC<RateModalProps> = (props) => {
    const { className, button } = props;

    return (
        <Modal trigger={button} className={classNames(cls.RateModal, {}, [className])}>
            <RateModalContent />
        </Modal>
    );
};
