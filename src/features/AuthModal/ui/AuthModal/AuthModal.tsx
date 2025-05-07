import { FC, lazy } from 'react';
import { classNames } from '@/shared/lib/helpers/classNames';
import { Modal } from '@/shared/ui/Modal';
import { Button } from '@/shared/ui/Button';
export const AuthContent = lazy(() => import('./../AuthContent/AuthContent'));
import cls from './AuthModal.module.scss';

interface AuthModalProps {
    className?: string;
}

export const AuthModal: FC<AuthModalProps> = (props) => {
    const { className } = props;

    const modalBtn = (
        <Button className={className} data-testid="AuthModal-Button">
            Войти
        </Button>
    );

    return (
        <Modal trigger={modalBtn} className={classNames(cls.AuthModal)}>
            <AuthContent />
        </Modal>
    );
};
