import { FC } from 'react';
import { classNames } from '@packages/model/src/lib/helpers/classNames';
import { Modal } from '@packages/ui/src/shared/Modal';
import { Button } from '@packages/ui/src/shared/Button';
import { AuthContent } from '../AuthContent';
import cls from './AuthModal.module.scss';

interface AuthModalProps {
    className?: string;
}

export const AuthModal: FC<AuthModalProps> = (props) => {
    const { className } = props;

    const modalBtn = <Button>Войти</Button>;

    return (
        <Modal trigger={modalBtn} className={classNames(cls.AuthModal, {}, [className])}>
            <AuthContent />
        </Modal>
    );
};
